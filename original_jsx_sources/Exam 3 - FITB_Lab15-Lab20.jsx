import React, { useMemo, useState, useEffect, useRef } from "react";

/**
 * BioMegaQuiz_15q_LENIENT.jsx
 * Adds EXTRA-lenient FITB checking:
 *  - plural/singular tolerant (regular + common irregulars)
 *  - hyphen/space-insensitive ("beta-lactamase" == "beta lactamase")
 *  - punctuation/diacritics/greek letter normalization (β -> beta, μ -> micro)
 *  - token subset match with high overlap (handles order differences)
 *  - typo tolerant Levenshtein threshold scaled by length
 *  - ignores stopwords ("a", "an", "the", "of", "to", "and", "for")
 * Keeps: Modules/Question Count UI, combined header with progress bar, Quiz Summary page.
 */

export default function BioMegaQuiz_15q_LENIENT() {  const QUESTIONS = useMemo(() => ([
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "DNA belongs to the class of macromolecules called __.", accept: ["nucleic acids", "nucleic acid"], exp: "DNA is a nucleic acid composed of nucleotides. " },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "The monomer of DNA is a __ consisting of phosphate, deoxyribose, and a nitrogenous base.", accept: ["nucleotide"], exp: "A nucleotide = phosphate + deoxyribose sugar + base." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "The four bases in DNA are __, __, __, and __.", accept: ["adenine thymine cytosine guanine", "a t c g", "adenine, thymine, cytosine, guanine"], exp: "A,T,C,G are the four DNA bases." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "Watson and Crick described DNA’s 3D shape as a __ __.", accept: ["double helix", "helix"], exp: "The twisted ladder model is the double helix." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "In DNA, adenine pairs with __ and cytosine pairs with __.", accept: ["thymine and guanine", "thymine guanine", "t and g"], exp: "Complementary base pairing: A–T and C–G." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "A gene is a segment of DNA that encodes a __ that folds into a protein.", accept: ["polypeptide", "peptide"], exp: "A gene specifies a polypeptide sequence." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "The central dogma can be summarized as DNA → RNA → __ → protein.", accept: ["polypeptide", "amino acid chain"], exp: "Information flows from nucleic acid to polypeptide." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "Protein synthesis occurs in two stages: __ (DNA→RNA) and __ (RNA→protein).", accept: ["transcription and translation", "transcription translation"], exp: "Transcription then translation." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "The genetic code uses triplets; each __ of mRNA specifies one amino acid.", accept: ["codon"], exp: "Codons are 3‑base words in mRNA." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "The anticodon is carried by __ and base-pairs with the codon.", accept: ["tRNA", "transfer rna"], exp: "tRNA decodes mRNA via anticodons." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "The genetic code is read in triplets; there are __ possible codons.", accept: ["64", "sixty four", "sixty-four"], exp: "4^3 = 64 combinations." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "The start codon for translation in most organisms is __.", accept: ["aug", "methionine"], exp: "AUG codes for methionine and starts translation." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "Three stop codons terminate translation: __, __, and __ (use RNA letters).", accept: ["uaa uag uga", "uag uaa uga", "uga uaa uag"], exp: "UAA, UAG, and UGA are stop codons." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "mRNA uses the base __ instead of thymine.", accept: ["uracil", "u"], exp: "RNA uses uracil in place of thymine." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "The sugar in DNA nucleotides is __.", accept: ["deoxyribose"], exp: "DNA uses deoxyribose; RNA uses ribose." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "The phosphate and sugar form the DNA __, with bases pointing inward.", accept: ["backbone", "sugar-phosphate backbone"], exp: "Covalent phosphodiester bonds make the backbone." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "Two DNA strands run in opposite 5′→3′ directions; this is called __ orientation.", accept: ["antiparallel"], exp: "Antiparallel strands enable base pairing." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "A __ consists of DNA wrapped around histone proteins (eukaryotes).", accept: ["nucleosome"], exp: "Nucleosomes compact eukaryotic DNA." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "In protein synthesis tables, the amino acid specified is determined by the __ codon.", accept: ["mrna", "mRNA"], exp: "Use mRNA codons—not tRNA or DNA—for lookup." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "During wheat germ DNA extraction, detergent helps by dissolving __ and __ in membranes.", accept: ["lipids and proteins", "proteins and lipids"], exp: "Detergent disrupts cell and nuclear membranes." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "In the extraction protocol, the warm 55°C water bath helps denature __ that could damage DNA.", accept: ["enzymes", "dnases", "nucleases"], exp: "Heat inactivates nucleases and enhances detergent action." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "__ acts as a buffer to maintain near‑neutral pH and stabilize DNA in the extraction.", accept: ["sodium bicarbonate", "nahco3", "bicarbonate"], exp: "NaHCO3 keeps pH near neutral for DNA stability." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "Meat tenderizer supplies a __ enzyme that degrades proteins surrounding DNA.", accept: ["proteolytic", "protease"], exp: "Protease digests nuclear proteins to free DNA." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "Cold 95% ethanol causes DNA to __ because it is insoluble in alcohol.", accept: ["precipitate", "ppt", "come out of solution"], exp: "DNA dehydrates and precipitates at the alcohol interface." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "Precipitated DNA can be collected by slowly __ it with a glass hook.", accept: ["spooling", "winding", "twirling"], exp: "Long strands spool at the ethanol interface." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "A single mRNA codon specifies __ amino acid(s).", accept: ["one", "1"], exp: "The code is non‑overlapping and unambiguous." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "A segment of DNA that codes for a polypeptide is a __; its position on a chromosome is a __.", accept: ["gene locus", "gene and locus", "locus"], exp: "Gene at a specific locus." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "The three parts of a nucleotide are phosphate, __ sugar, and a nitrogenous base.", accept: ["deoxyribose"], exp: "Deoxyribose distinguishes DNA from RNA." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "The number of DNA bases needed to code one RNA codon is __.", accept: ["three", "3"], exp: "Triplet code." },
{ module: "W09 L17 DNA & Chromosomes • Exam2-style", q: "__ (process) converts the information in mRNA into a polypeptide sequence.", accept: ["translation"], exp: "Translation occurs at ribosomes." },
{ module: "W10 L18 Transformation • Exam2-style", q: "Small circular DNA in bacteria, replicated independently of the chromosome, is called a __.", accept: ["plasmid"], exp: "Plasmids often carry accessory genes such as antibiotic resistance." },
{ module: "W10 L18 Transformation • Exam2-style", q: "Plasmids that carry antibiotic‑resistance genes are called __ plasmids.", accept: ["r-plasmids", "r plasmids", "resistance plasmids"], exp: "R‑plasmids encode enzymes that inactivate antibiotics." },
{ module: "W10 L18 Transformation • Exam2-style", q: "The plasmid used in this lab is __, which confers resistance to ampicillin.", accept: ["pamp", "pamp plasmid"], exp: "pAMP carries Amp^R for ampicillin resistance." },
{ module: "W10 L18 Transformation • Exam2-style", q: "The Amp^R gene encodes the enzyme __ that inactivates ampicillin.", accept: ["beta-lactamase", "betalactamase"], exp: "β‑lactamase cleaves the β‑lactam ring." },
{ module: "W10 L18 Transformation • Exam2-style", q: "Cells able to take up foreign DNA are described as __.", accept: ["competent", "competent cells"], exp: "Competency may be natural or induced." },
{ module: "W10 L18 Transformation • Exam2-style", q: "Chemical competency is induced in E. coli using cold __ solution.", accept: ["calcium chloride", "cacl2", "ca cl2"], exp: "CaCl2 promotes DNA binding to the cell surface." },
{ module: "W10 L18 Transformation • Exam2-style", q: "During transformation, cells are __‑shocked at 42°C for about 90 seconds.", accept: ["heat", "heat"], exp: "Rapid shift from ice to 42°C facilitates DNA uptake." },
{ module: "W10 L18 Transformation • Exam2-style", q: "After heat shock, cells recover in __ (medium) for ~10 minutes to express Amp^R.", accept: ["luria broth", "lb"], exp: "Recovery allows expression of β‑lactamase before plating." },
{ module: "W10 L18 Transformation • Exam2-style", q: "Only transformed cells grow on plates containing __.", accept: ["ampicillin", "amp"], exp: "Ampicillin kills cells lacking the pAMP plasmid." },
{ module: "W10 L18 Transformation • Exam2-style", q: "On which plate would you expect growth from +pAMP cells: LB/Amp+ or LB/Amp‑? __.", accept: ["lb/amp+", "lb amp plus", "lb/amp plus"], exp: "+pAMP cells grow on LB/Amp+." },
{ module: "W10 L18 Transformation • Exam2-style", q: "The plate that should show lawn growth for both + and – cells is the __ plate.", accept: ["lb", "luria broth", "lb plate"], exp: "LB lacks antibiotic, so all viable cells grow." },
{ module: "W10 L18 Transformation • Exam2-style", q: "The negative control showing no growth for –pAMP cells is the __ plate.", accept: ["lb/amp-", "lb amp minus", "lb/amp minus"], exp: "–pAMP are killed by ampicillin." },
{ module: "W10 L18 Transformation • Exam2-style", q: "Microtube labels in this protocol are “+” for cells __ plasmid and “–” for cells __ plasmid.", accept: ["with without", "with; without", "with plasmid without plasmid"], exp: "Only the “+” tube receives pAMP." },
{ module: "W10 L18 Transformation • Exam2-style", q: "Spread __ µL of cells onto each plate in the plating step.", accept: ["100", "100 \u00b5l", "100 microliters"], exp: "100 µL of each suspension is plated." },
{ module: "W10 L18 Transformation • Exam2-style", q: "The pAMP stock concentration was 0.2 µg/µL and 10 µL were added; total mass added = __ µg.", accept: ["2", "2.0", "2 \u00b5g"], exp: "10 µL × 0.2 µg/µL = 2 µg pAMP." },
{ module: "W10 L18 Transformation • Exam2-style", q: "The total volume after adding LB for recovery is 250 µL CaCl2 + 10 µL pAMP + 250 µL LB = __ µL.", accept: ["510", "510 \u00b5l"], exp: "Used in transformation efficiency calculations." },
{ module: "W10 L18 Transformation • Exam2-style", q: "Transformation efficiency is reported as colonies per __ of plasmid DNA.", accept: ["microgram", "\u00b5g", "ug"], exp: "Colonies/µg pAMP." },
{ module: "W10 L18 Transformation • Exam2-style", q: "A restriction enzyme that recognizes 5′‑AAGCTT‑3′ is __.", accept: ["hindiii", "hind iii", "hindiii restriction enzyme"], exp: "HindIII from Haemophilus influenzae." },
{ module: "W10 L18 Transformation • Exam2-style", q: "Restriction enzymes often create overhangs known as __ __.", accept: ["sticky ends", "cohesive ends"], exp: "Sticky ends help ligate fragments." },
{ module: "W10 L18 Transformation • Exam2-style", q: "The enzyme that connects DNA fragments during cloning is DNA __.", accept: ["ligase"], exp: "Ligase seals nicks in the backbone." },
{ module: "W10 L18 Transformation • Exam2-style", q: "A circular vector carrying inserted human DNA is a __ plasmid.", accept: ["recombinant", "recombinant plasmid"], exp: "Vector + insert = recombinant plasmid." },
{ module: "W10 L18 Transformation • Exam2-style", q: "Only bacteria that successfully take up pAMP will survive on __ + ampicillin plates.", accept: ["lb", "lb agar", "luria broth"], exp: "LB/Amp selects for transformants." },
{ module: "W10 L18 Transformation • Exam2-style", q: "During plating, sterilize the spreading rod and allow it to __ on agar before spreading.", accept: ["cool", "cool down"], exp: "Cooling prevents killing cells or melting agar." },
{ module: "W10 L18 Transformation • Exam2-style", q: "Labels should be written on the __ of plates, not on the lids.", accept: ["base", "bottom"], exp: "Write on the plate base to track samples." },
{ module: "W10 L18 Transformation • Exam2-style", q: "After spreading, incubate plates upside‑down at __ °C for 24–48 hours.", accept: ["37", "37\u00b0c", "37 c"], exp: "Standard incubation temperature for E. coli growth." },
{ module: "W10 L18 Transformation • Exam2-style", q: "The purpose of the LB‑ plate is as a __ control for cell viability after heat shock.", accept: ["growth", "positive control", "viability"], exp: "All heat‑shocked cells should grow on LB‑." },
{ module: "W10 L18 Transformation • Exam2-style", q: "The purpose of the LB/Amp‑ plate is a __ control showing that –pAMP cells are sensitive.", accept: ["negative control"], exp: "No growth expected without plasmid on ampicillin." },
{ module: "W10 L18 Transformation • Exam2-style", q: "Competency can be generated artificially by changing __ and/or __ of the medium.", accept: ["temperature and salt", "salt and temperature"], exp: "Chemical competence uses CaCl2 and temperature shift." },
{ module: "W10 L18 Transformation • Exam2-style", q: "Transformed cells acquire new traits when they __ and __ the introduced genes.", accept: ["incorporate and express", "express and incorporate"], exp: "Phenotype changes require expression of plasmid genes." },
{ module: "W10 L18 Transformation • Exam2-style", q: "Plasmid selection works because bacteria lacking the plasmid are __ by the antibiotic.", accept: ["killed", "inhibited", "destroyed"], exp: "Only resistant transformants form colonies." }
,
{ module: "W11 L19 Mitosis • Exam2-style", q: "During interphase, chromosomes are decondensed and collectively called ___.", accept: ["chromatin"], exp: "Chromosomes are not visible in interphase because DNA is in the chromatin state." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "The two gap phases of interphase are __ and __.", accept: ["g1 and g2", "g1,g2", "g1 g2"], exp: "G1 and G2 surround S phase, when DNA replicates." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "DNA replication occurs in the __ phase of interphase.", accept: ["s", "s phase", "s-phase"], exp: "S stands for synthesis of DNA." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "A replicated chromosome consists of two __ __ joined at a centromere.", accept: ["sister chromatids", "chromatids"], exp: "Sister chromatids are identical copies until they separate." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "The protein structure where spindle fibers attach on a chromatid is the __.", accept: ["kinetochore"], exp: "Kinetochore proteins assemble at the centromere." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "Microtubules that attach to kinetochores are called __ microtubules.", accept: ["kinetochore"], exp: "Kinetochore microtubules connect chromosomes to the poles." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "Overlapping spindle fibers that elongate the cell are __ microtubules.", accept: ["polar", "nonkinetochore"], exp: "Polar (non-kinetochore) microtubules push the poles apart." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "In animal cells, the spindle originates from the duplicated __.", accept: ["centrosome", "centrioles", "pair of centrioles"], exp: "The centrosome (two centrioles) replicates in interphase." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "__ is the nuclear division of chromosomes; cytokinesis divides the cytoplasm.", accept: ["mitosis", "karyokinesis"], exp: "Mitosis partitions replicated chromosomes to two nuclei." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "During __, chromatin condenses and the nuclear envelope breaks down.", accept: ["prophase", "prometaphase"], exp: "Condensation and NEBD mark prophase/prometaphase." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "Chromosomes line up at the middle of the cell during __.", accept: ["metaphase"], exp: "They align at the metaphase plate (equatorial plane)." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "Centromeres split and sister chromatids separate during __.", accept: ["anaphase"], exp: "Separase allows sister chromatids to move to opposite poles." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "Nuclear envelopes re-form and chromosomes decondense during __.", accept: ["telophase"], exp: "Telophase restores nuclei prior to cytokinesis." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "Animal-cell cytokinesis proceeds by a contractile ring that forms a __ __.", accept: ["cleavage furrow", "furrow"], exp: "Actin–myosin constriction pinches the cell into two." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "Plant-cell cytokinesis proceeds by assembly of a __ __.", accept: ["cell plate", "plate"], exp: "Vesicles fuse at the center to build a new partition and wall." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "Cells containing two copies of each chromosome are called __ (symbol __).", accept: ["diploid 2n", "diploid; 2n", "diploid and 2n", "diploid"], exp: "Somatic cells are typically diploid, 2n." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "__ __ are pairs with same length, centromere position, and gene loci (one maternal, one paternal).", accept: ["homologous chromosomes", "homologs"], exp: "Homologs are equivalent but not identical copies." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "In onion root tips, a visible cell wall and a forming __ __ distinguish plant cytokinesis.", accept: ["cell plate", "plate"], exp: "Plants form a cell plate rather than a furrow." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "In whitefish blastula, a forming __ __ distinguishes animal cytokinesis.", accept: ["cleavage furrow", "furrow"], exp: "Animals pinch via a contractile ring." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "The imaginary plane where chromosomes align is called the __ __.", accept: ["metaphase plate", "equatorial plane", "equator"], exp: "It is not a structure—just a location." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "Spindle fibers are primarily composed of the cytoskeletal polymer __.", accept: ["microtubules", "tubulin"], exp: "Spindle microtubules are polymers of tubulin dimers." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "At the end of mitosis, daughter nuclei are genetically __ to the parent nucleus.", accept: ["identical", "the same"], exp: "Barring mutation, mitosis conserves genome content." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "During late anaphase, __ microtubules elongate the cell.", accept: ["polar", "nonkinetochore"], exp: "Polar microtubules overlap and lengthen." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "The nucleolus disappears during early __ and reappears in __.", accept: ["prophase and telophase", "prophase telophase"], exp: "Nucleoli disassemble with condensation; return as transcription resumes." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "The centrosomes migrate to opposite poles beginning in __.", accept: ["prophase"], exp: "Centrosome separation establishes poles for spindle." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "Kinetochore fibers shorten as chromosomes move by __ of tubulin subunits.", accept: ["depolymerization", "microtubule depolymerization"], exp: "Pac-man and flux models involve depolymerization." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "The cell-cycle stage encompassing mitosis and cytokinesis is collectively called __.", accept: ["m phase", "m-phase", "m"], exp: "M phase includes karyokinesis and cytokinesis." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "Time in stage (minutes/day) can be estimated as (cells in stage ÷ total) × __.", accept: ["1440", "1,440"], exp: "There are 1,440 minutes in 24 hours." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "A cell with 2n=4 has __ chromosomes aligned at the metaphase plate in mitosis.", accept: ["4", "four"], exp: "Mitosis aligns all duplicated chromosomes individually." },
{ module: "W11 L19 Mitosis • Exam2-style", q: "Sister chromatids become individual chromosomes at the start of __.", accept: ["anaphase"], exp: "Separation converts chromatids into chromosomes." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "Meiosis reduces chromosome number from __ to __.", accept: ["2n to n", "diploid to haploid"], exp: "Meiosis I halves ploidy (reduction division)." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "In animals, meiosis occurs in the __ to produce gametes.", accept: ["gonads", "testes and ovaries", "ovaries and testes", "reproductive organs"], exp: "Gonads produce eggs or sperm." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "Homologous chromosomes pair in __ __ to form __.", accept: ["prophase i tetrads", "prophase 1 tetrads", "prophase i; tetrads"], exp: "Synapsis forms tetrads of four chromatids." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "Exchange of DNA between non-sister chromatids during prophase I is called __.", accept: ["crossing over", "recombination"], exp: "Crossing over increases genetic variation." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "Random orientation of homologs at metaphase I is called independent __.", accept: ["assortment"], exp: "Each homologous pair orients independently." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "In metaphase I, __ __ line up as pairs at the equator.", accept: ["homologous chromosomes", "homologs", "tetrads"], exp: "Pairs align side-by-side." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "In anaphase I, __ separate while __ remain joined at centromeres.", accept: ["homologs sister chromatids", "homologous chromosomes sister chromatids"], exp: "Centromeres do not split in anaphase I." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "At the end of meiosis I, each daughter nucleus is __ (ploidy).", accept: ["haploid", "n"], exp: "Each has one chromosome from each pair." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "There is/are __ round(s) of DNA replication for the entire meiotic process.", accept: ["one", "1"], exp: "S phase occurs only before meiosis I." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "Meiosis consists of __ nuclear divisions to produce __ daughter cells.", accept: ["two four", "2 4", "two; four"], exp: "Meiosis I and II yield four haploid cells." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "Meiosis II resembles __ because sister chromatids separate.", accept: ["mitosis"], exp: "Anaphase II splits centromeres like mitosis." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "During __ __, sister chromatids finally separate.", accept: ["anaphase ii", "anaphase 2"], exp: "Centromeres split and chromatids move apart." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "A human gamete contains __ chromosomes.", accept: ["23", "twenty three", "twenty-three"], exp: "Human n = 23." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "Sex chromosomes are designated __ in typical human males and __ in females.", accept: ["xy and xx", "xy xx", "xx and xy"], exp: "Typical karyotypes are XY (male), XX (female)." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "The X and Y are __ chromosomes.", accept: ["sex", "sex chromosomes"], exp: "They determine sex in many species." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "Homologous pairing (synapsis) creates units called __ that contain four chromatids.", accept: ["tetrads", "bivalents"], exp: "Two homologs × two chromatids = four." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "After telophase I and cytokinesis, each nucleus has __ the chromosome number of the original cell.", accept: ["half", "1/2"], exp: "Reduction division completed." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "__ assortment and __ over generate genetic diversity (fill in 2 words).", accept: ["independent crossing", "independent assortment and crossing over", "independent; crossing"], exp: "Both mechanisms reshuffle alleles." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "The enzyme separase acts to split centromeres during __ of meiosis.", accept: ["anaphase ii", "anaphase 2"], exp: "Centromeres separate in meiosis II, not in I." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "No DNA replication occurs between meiosis I and meiosis II (true/false): __.", accept: ["true"], exp: "Cells proceed directly into meiosis II." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "In the modeling exercise, stickers labeled B or b represent different __ of a gene.", accept: ["alleles", "allele"], exp: "Dominant B and recessive b mark loci." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "Crossing over occurs between __ chromatids of homologs (sister/non-sister?).", accept: ["non-sister", "nonsister", "non sister"], exp: "Only non-sister chromatids exchange segments." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "Chromosome number is reduced when __ separate (meiosis I or II?).", accept: ["meiosis i", "meiosis 1", "i", "1"], exp: "Separation of homologs halves ploidy." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "In anaphase II, chromosomes move along microtubules by __ of tubulin.", accept: ["depolymerization", "microtubule depolymerization"], exp: "Like mitosis, shortening pulls chromatids apart." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "After meiosis is complete, __ haploid cells are typically produced.", accept: ["four", "4"], exp: "End product of the two divisions." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "At metaphase I, homologs are on opposite sides of the __ __.", accept: ["metaphase plate", "equatorial plane"], exp: "Each pair aligns as a unit." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "Cytokinesis after meiosis II produces a total of __ cells from one starting cell.", accept: ["four", "4"], exp: "Both divisions complete." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "The term for a cell with a single set of chromosomes is __ (symbol __).", accept: ["haploid n", "haploid; n", "haploid and n", "haploid"], exp: "Gametes are haploid (n)." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "After crossing over, chromatids become genetic __ of parental chromatids.", accept: ["recombinants", "recombinant"], exp: "Recombination mixes maternal and paternal alleles." },
{ module: "W11 L20 Meiosis • Exam2-style", q: "Independent assortment refers to random alignment of __ pairs during __ __.", accept: ["homologous metaphase i", "homologs metaphase i", "homologous pairs metaphase i"], exp: "Each pair aligns independently of others." }




,
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "A sports drink is used to collect cheek cells because it is __ to the cells (prevents lysis).", accept: ["isotonic", "iso-osmotic", "isoosmotic"], exp: "Sports drink has salt at a concentration similar to the osmotic environment of cheek cells." },
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "If a student accidentally used water to collect cells, the cells would __ because water is hypotonic.", accept: ["lyse", "burst", "swell and lyse"], exp: "Hypotonic water drives osmosis into the cells, causing lysis." },
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "The detergent-based cell lysis solution dissolves __ in membranes by forming water‑soluble complexes.", accept: ["phospholipids", "lipids"], exp: "Detergents solubilize phospholipid bilayers to release cellular contents." },
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "After adding cell lysis solution, invert the tube __ times and let it stand for __ minutes.", accept: ["5 and 2", "5 2", "five and two"], exp: "Protocol: invert 5×, then stand undisturbed for ~2 min." },
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "Cold __% ethanol is layered on top of the lysate to precipitate DNA.", accept: ["70", "70%", "70 percent"], exp: "Add cold 70% ethanol carefully to create two layers." },
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "When adding ethanol, you should create two distinct layers and __ mix them.", accept: ["not", "do not", "never"], exp: "Keep ethanol separate on top of lysate so DNA precipitates at the interface." },
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "DNA is soluble in cell lysate but insoluble in __, so it becomes visible as stringy fibers.", accept: ["ethanol", "alcohol"], exp: "DNA precipitates where ethanol contacts the lysate." },
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "As DNA precipitates, it appears as a translucent __ extending through the ethanol layer.", accept: ["cloud", "cobweb", "stringy cloud"], exp: "Wispy strands/clouds form at the interface." },
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "After adding ethanol, let the tube sit for at least __ minutes to allow more DNA to precipitate.", accept: ["10", "ten"], exp: "Leave undisturbed ~10 min for maximal yield." },
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "To transfer the precipitated DNA, use a plastic pipet and collect from the __ of the most extended strand.", accept: ["end", "tip"], exp: "Begin at the end so the DNA draws up together." },
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "Before expelling into the microcentrifuge tube, allow the DNA to __ to the pipet tip.", accept: ["sink", "settle"], exp: "Let DNA sink so it enters the tube first." },
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "The salt in the sports drink helps DNA strands to __ together as they precipitate.", accept: ["clump", "aggregate", "stick"], exp: "Salt shields negative charges, promoting aggregation." },
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "Ethanol is __ and must be kept away from heat and flames at all times.", accept: ["flammable"], exp: "Safety note: ethanol is highly flammable." },
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "Storing the crude DNA sample in a __ will slow nuclease‑mediated degradation.", accept: ["freezer", "freezer (cold storage)"], exp: "Cold storage slows enzymatic degradation of DNA." },
{ module: "W08 L15 DNA Extraction • Exam2-style", q: "Label the __-mL tube with your name, collect cheek cells, then transfer DNA into a labeled __ tube.", accept: ["15 and microcentrifuge", "15 mL and microcentrifuge", "15-mL and microcentrifuge"], exp: "Use a labeled 15‑mL tube for collection; store DNA in a microcentrifuge tube." }
]), []);




 /** --------------------------- LENIENT MATCH HELPERS --------------------------- **/
  const STOP = new Set(["a","an","the","of","to","and","for","in","on","at","is"]);
  const IRREG = new Map([
    ["children","child"],["mice","mouse"],["men","man"],["women","woman"],
    ["teeth","tooth"],["feet","foot"],["geese","goose"],
    ["nuclei","nucleus"],["bacteria","bacterium"],["data","datum"],
    ["media","medium"],["criteria","criterion"],["indices","index"],
    ["matrices","matrix"],["codices","codex"],["lives","life"],["leaves","leaf"]
  ]);

  const norm = (s) =>
    String(s == null ? "" : s)
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")          // strip accents
      .replace(/[‐‑‒–—―]/g, "-")                 // unify dashes
      .replace(/β/g, "beta")
      .replace(/α/g, "alpha")
      .replace(/γ/g, "gamma")
      .replace(/μ/g, "micro")
      .replace(/ß/g, "ss")
      .replace(/[^a-z0-9\s\-+\/.%]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const singularize = (w) => {
    if (IRREG.has(w)) return IRREG.get(w);
    if (w.endsWith("ies") && w.length > 3) return w.slice(0,-3)+"y";
    if (/(ches|shes|xes|zes)$/.test(w)) return w.slice(0,-2);
    if (/ves$/.test(w)) return w.slice(0,-3)+(w.endsWith("ves")? (w.slice(-4,-3)==="i"?"fe":"f") : "f");
    if (w.endsWith("es") && !w.endsWith("ses") && !/(ches|shes|xes|zes)$/.test(w)) return w.slice(0,-2);
    if (w.endsWith("s") && !w.endsWith("ss")) return w.slice(0,-1);
    return w;
  };

  const baseForm = (s) =>
    norm(s)
      .replace(/[-_]/g, " ")
      .split(" ")
      .filter(Boolean)
      .map((w) => singularize(w))
      .join(" ");

  const tokens = (s) =>
    baseForm(s)
      .split(" ")
      .filter((w) => w && !STOP.has(w));

  /** Levenshtein distance */
  const lev = (a, b) => {
    a = baseForm(a); b = baseForm(b);
    if (a === b) return 0;
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    const v0 = new Array(n + 1), v1 = new Array(n + 1);
    for (let i = 0; i <= n; i++) v0[i] = i;
    for (let i = 0; i < m; i++) {
      v1[0] = i + 1;
      for (let j = 0; j < n; j++) {
        const cost = a[i] === b[j] ? 0 : 1;
        v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
      }
      for (let j = 0; j <= n; j++) v0[j] = v1[j];
    }
    return v0[n];
  };

  /** Very lenient equality */
  const eqLoose = (a, b) => {
    const na = norm(a), nb = norm(b);
    if (na === nb) return true;

    const ta = tokens(na), tb = tokens(nb);
    if (ta.length && tb.length) {
      // unordered token match tolerance
      const setB = new Set(tb);
      let inter = 0;
      for (let t of ta) if (setB.has(t)) inter++;
      const unionSize = new Set([...ta, ...tb]).size;
      const jacc = inter / Math.max(1, unionSize);
      if (jacc >= 0.75) return true;                 // more lenient than before

      // allow subset if one side is short (e.g., "codon" vs "the codons")
      if (Math.min(ta.length, tb.length) <= 2) {
        const short = ta.length <= tb.length ? ta : tb;
        const longSet = new Set(ta.length <= tb.length ? tb : ta);
        if (short.every((w) => longSet.has(w))) return true;
      }
    }

    // char-level typo tolerance scaled by length
    const d = lev(na, nb);
    const L = Math.max(na.length, nb.length);
    const thresh = Math.max(1, Math.min(4, Math.round(L * 0.22))); // up to ~22% typos, cap 4
    return d <= thresh;
  };

  const matchFITB = (userInput, q) => {
    const u = userInput == null ? "" : userInput;
    if (Array.isArray(q.accept) && q.accept.some((a) => eqLoose(a, u))) return true;
    if (typeof q.answer === "string" && eqLoose(q.answer, u)) return true;
    return false;
  };

  /** --------------------------- SESSION / UI (summary-capable) --------------------------- **/
  const MODULES = useMemo(() => {
    const order = [];
    const set = Array.from(new Set(QUESTIONS.map((q) => q.module)));
    const sorted = order.concat(set.filter((k) => order.indexOf(k) === -1));
    return sorted.map((key) => ({ key, label: key }));
  }, [QUESTIONS]);

  const [selectedModules, setSelectedModules] = useState(new Set()); // empty = all
  const [countInput, setCountInput] = useState("all");
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e9));

  const filteredPool = useMemo(() => {
    const allowAll = selectedModules.size === 0;
    return QUESTIONS.filter((q) => allowAll || selectedModules.has(q.module));
  }, [QUESTIONS, selectedModules]);

  // seeded shuffle (xorshift32)
  const shuffle = (arr, s) => {
    const a = arr.slice();
    let x = s || 1;
    for (let i = a.length - 1; i > 0; i--) {
      x ^= x << 13; x ^= x >> 17; x ^= x << 5;
      const j = Math.abs(x) % (i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const sessionQuestions = useMemo(() => {
    const allText = (countInput || "").trim().toLowerCase();
    const n = allText === "all" ? filteredPool.length : Math.max(1, Math.min(filteredPool.length, parseInt(countInput || "0", 10) || filteredPool.length));
    return shuffle(filteredPool, seed).slice(0, n);
  }, [filteredPool, countInput, seed]);

  /** state */
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState({});
  const [locked, setLocked] = useState({});
  const [perResult, setPerResult] = useState({});
  const [showSummary, setShowSummary] = useState(false);
  const [timeSpent, setTimeSpent] = useState({});
  const startedAtRef = useRef(Date.now());

  useEffect(() => {
    setCurrent(0); setInput({}); setLocked({}); setPerResult({});
    setShowSummary(false); setTimeSpent({}); startedAtRef.current = Date.now();
  }, [seed, filteredPool.length, countInput]);

  useEffect(() => { startedAtRef.current = Date.now(); }, [current]);

  const attempted = Object.keys(locked).length;
  const correct = Object.values(perResult).filter(Boolean).length;
  const total = sessionQuestions.length;
  const q = sessionQuestions[current];

  const lockTimeFor = (idx) => {
    const deltaSec = Math.max(0, Math.round((Date.now() - startedAtRef.current) / 1000));
    setTimeSpent((prev) => ({ ...prev, [idx]: (prev[idx] || 0) + deltaSec }));
  };

  const onSubmit = () => {
    if (!q || locked[current]) return;
    const hasText = input[current] && String(input[current]).trim().length > 0;
    if (!hasText) return;
    const ok = matchFITB(input[current], q);
    setPerResult((prev) => ({ ...prev, [current]: ok }));
    setLocked((prev) => ({ ...prev, [current]: true }));
    lockTimeFor(current);
  };

  const onFinish = () => {
    if (!locked[current]) {
      setPerResult((prev) => ({ ...prev, [current]: false }));
      setLocked((prev) => ({ ...prev, [current]: true }));
      lockTimeFor(current);
    }
    setShowSummary(true);
  };

  const reshuffle = () => setSeed(Math.floor(Math.random() * 1e9));

  /** Summary view */
  const SummaryView = () => {
    const incorrect = attempted - correct;
    const gradePct = total ? Math.round((correct / total) * 100) : 0;
    const items = sessionQuestions.map((qq, idx) => ({
      idx,
      q: qq.q,
      ok: perResult[idx] === true,
      time: timeSpent[idx] || 0,
      ans: (input[idx] ?? "").toString().trim() || "—",
    }));

    const jumpToFirstIncorrect = () => {
      const firstBad = items.find((x) => !x.ok);
      if (firstBad) { setCurrent(firstBad.idx); setShowSummary(false); }
    };

    return (
      <div className="rounded-2xl bg-white shadow p-6">
        <div className="text-2xl font-bold text-slate-900 mb-1">Quiz Summary</div>
        <div className="text-slate-600 mb-4">Here’s how you did this session.</div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
          {[
            { label: "TOTAL", value: total },
            { label: "ATTEMPTED", value: attempted },
            { label: "CORRECT", value: correct },
            { label: "INCORRECT", value: incorrect },
            { label: "GRADE (%)", value: gradePct },
          ].map((b) => (
            <div key={b.label} className="rounded-xl bg-indigo-50 text-center py-5">
              <div className="text-3xl font-extrabold text-indigo-600">{b.value}</div>
              <div className="text-sm font-medium text-indigo-700 mt-1">{b.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          <button className="rounded-xl px-4 py-2 bg-slate-100 border border-slate-300 hover:bg-slate-200" onClick={() => setShowSummary(false)}>Review Questions</button>
          <button className="rounded-xl px-4 py-2 bg-rose-600 text-white hover:bg-rose-700" onClick={jumpToFirstIncorrect}>Review Incorrect Answers</button>
          <button className="rounded-xl px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700" onClick={reshuffle}>Restart / Reshuffle</button>
        </div>

        <div className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-12 gap-0 text-sm font-semibold text-slate-600 border-b px-4 py-2">
            <div className="col-span-8">Question</div>
            <div className="col-span-2 text-center">Result</div>
            <div className="col-span-2 text-center">Time Spent</div>
          </div>
          {items.map((it) => (
            <div key={it.idx} className="grid grid-cols-12 gap-0 border-b last:border-b-0 px-4 py-3 text-slate-800">
              <div className="col-span-8">
                <span className="font-semibold mr-2">Q{it.idx + 1}.</span>{it.q}
                <div className="text-slate-600 text-sm mt-1"><span className="font-medium">Your answer:</span> {it.ans}</div>
              </div>
              <div className="col-span-2 text-center">{it.ok ? <span className="text-emerald-700 font-semibold">Correct</span> : <span className="text-rose-700 font-semibold underline decoration-dotted">Incorrect</span>}</div>
              <div className="col-span-2 text-center">{String(Math.floor((it.time||0) / 60)).padStart(1,"0")}:{String((it.time||0) % 60).padStart(2,"0")}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  /** --------------------------- UI --------------------------- **/
  if (showSummary) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-start justify-center p-4 md:p-8">
        <div className="w-full max-w-5xl"><SummaryView /></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl">

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="rounded-2xl bg-white shadow p-4">
            <div className="text-slate-900 font-semibold mb-2">Module</div>
            <div className="text-sm text-slate-600 mb-2">Modules (multi-select):</div>
            <div className="flex gap-2 mb-2">
              <button className="px-3 py-1 rounded-lg border border-slate-300 bg-slate-100 hover:bg-slate-200" onClick={() => setSelectedModules(new Set())}>All</button>
              <button className="px-3 py-1 rounded-lg border border-slate-300 bg-slate-100 hover:bg-slate-200" onClick={() => setSelectedModules(new Set())}>Clear</button>
            </div>
            <div className="h-40 overflow-auto border rounded-lg p-2">
              {MODULES.map((m) => {
                const checked = selectedModules.size === 0 ? true : selectedModules.has(m.key);
                return (
                  <label key={m.key} className="flex items-center gap-2 p-1 rounded cursor-pointer hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {
                        setSelectedModules((prev) => {
                          const next = new Set(prev);
                          if (selectedModules.size === 0) next.add(m.key);
                          else if (next.has(m.key)) next.delete(m.key);
                          else next.add(m.key);
                          return next;
                        });
                      }}
                    />
                    <span className="text-slate-800">{m.label}</span>
                  </label>
                );
              })}
            </div>
            <div className="text-xs text-slate-500 mt-2">Selecting "All" overrides individual picks.</div>
          </div>

          <div className="rounded-2xl bg-white shadow p-4">
            <div className="text-slate-900 font-semibold mb-2">Question Count</div>
            <input className="w-full rounded-lg border border-slate-300 p-2 mb-2" value={countInput} onChange={(e) => setCountInput(e.target.value)} placeholder="Enter a number (e.g., 20) or leave as all." />
            <div className="text-sm text-slate-600 mb-3">Enter a number (e.g., 20) or leave as all.</div>
            <button className="rounded-xl bg-indigo-600 text-white px-4 py-2 shadow hover:bg-indigo-700" onClick={reshuffle}>Restart / Reshuffle</button>
          </div>
        </div>

        {/* Header */}
        <div className="rounded-2xl bg-white shadow p-4 mb-4">
          <div className="flex items-center justify-between text-sm md:text-base text-slate-800 mb-2">
            <div className="font-medium">Question {total ? (current + 1) : 0} / {total || 0}</div>
            <div>Score: {correct} / {attempted} attempted ({total ? Math.round((correct / Math.max(1, attempted)) * 100) : 0}%)</div>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full">
            <div className="h-2 bg-indigo-500 rounded-full" style={{ width: `${total <= 1 ? 0 : (current / (total - 1)) * 100}%` }} />
          </div>
        </div>

        {/* Question card */}
        <div className="rounded-2xl bg-white shadow p-5 md:p-6">
          <div className="text-slate-900 text-lg font-medium mb-3">
            {q ? (<><span className="text-xs font-semibold uppercase text-indigo-600 mr-2">{q.module}</span>{q.q}</>) : "No questions in selection."}
          </div>
          {q && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <input
                  type="text"
                  value={input[current] ? input[current] : ""}
                  onChange={(e) => !locked[current] && setInput((prev) => ({ ...prev, [current]: e.target.value }))}
                  placeholder="Type your answer..."
                  className="flex-1 rounded-xl border border-slate-300 p-3"
                />
                <button onClick={onSubmit} disabled={locked[current] || !(input[current] && String(input[current]).trim().length)} className="rounded-xl px-3 py-2 bg-indigo-600 text-white shadow hover:bg-indigo-700 disabled:opacity-60">
                  {locked[current] ? "Locked" : "Submit Answer"}
                </button>
              </div>

              {locked[current] && (
                <div className={`rounded-xl border p-3 text-sm ${perResult[current] ? "bg-green-50 border-green-300 text-green-900" : "bg-rose-50 border-rose-300 text-rose-900"}`}>
                  <div className="font-semibold mb-1">{perResult[current] ? "Correct" : "Not quite"}</div>
                  <div className="text-slate-800 mb-1"><strong>Your answer:</strong> {input[current] || "—"}</div>
                  <div className="text-slate-800"><strong>Accepted:</strong> {Array.isArray(q.accept) ? q.accept.join(", ") : "—"}</div>
                  {q.exp && <div className="mt-2 text-slate-700">{q.exp}</div>}
                </div>
              )}

              <div className="mt-5 flex items-center justify-between">
                <button onClick={() => setCurrent((c) => Math.max(0, c - 1))} className="rounded-xl px-3 py-2 bg-slate-100 border border-slate-300 hover:bg-slate-200 disabled:opacity-50" disabled={current === 0}>Previous</button>
                <div className="flex items-center gap-2">
                  <button onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))} className="rounded-xl px-3 py-2 bg-slate-100 border border-slate-300 hover:bg-slate-200 disabled:opacity-50" disabled={current >= total - 1}>Next</button>
                  <button onClick={onFinish} className="rounded-xl px-3 py-2 bg-emerald-600 text-white hover:bg-emerald-700">Finish Quiz</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}