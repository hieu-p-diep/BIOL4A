import React, { useMemo, useState, useEffect } from "react";

/**
 * BioMegaQuiz — React + Tailwind single-file quiz
 * - 15 questions per module (expanded)
 * - Modules: Plasma Membranes (3 parts), Metabolism (3 parts), Viruses (2 parts)
 * - Mixed mode (All) + module filter, randomization, scoring, review, reshuffle
 */

export default function BioMegaQuiz() {
  /** --------------------------- Question Data --------------------------- **/
  // 15 questions per module (expanded as requested)
  // Module keys match dropdown filter labels.

  const modules = useMemo(() => [



{
  key: "W12_Ch12_Part1_MendelIntro",
  label: "W12 Lecture15 Ch12 Part 1 – Mendel’s Experiments & Heredity (Intro)",
  questions: [
      {
        q: "Which misconception did Mendel’s results directly refute?",
        choices: ["Inheritance blends parental traits into an average", "Traits skip generations because genes vanish", "All traits are encoded in proteins", "Every trait is polygenic"],
        a: 0,
        exp: "F2 segregation showed discrete units (particulate inheritance), not blending."
      },
      {
        q: "Why were peas an excellent model for Mendel?",
        choices: ["They reproduce only asexually", "They have long generation times", "They are monoecious, have many true‑breeding traits, and produce many offspring", "They cannot self‑fertilize"],
        a: 2,
        exp: "Peas offered many dichotomous traits, selfing, and short generations enabling large sample sizes."
      },
      {
        q: "In Mendel’s notation, the parental generation and their immediate offspring are abbreviated __ and __.",
        choices: ["F1 and F2", "P and F1", "G1 and G2", "T0 and T1"],
        a: 1,
        exp: "P = parental; F1 = first filial generation."
      },
      {
        q: "A 'self cross' means:",
        choices: ["Crossing two different species", "Crossing siblings only", "Crossing a plant with itself", "Crossing with a tester strain"],
        a: 2,
        exp: "Selfing allowed Mendel to propagate true‑breeding lines and analyze segregation."
      },
      {
        q: "Which statement best summarizes Mendel’s monohybrid F2 results?",
        choices: ["2:1 phenotypic ratio", "1:2:1 phenotypic ratio", "3:1 phenotypic ratio for dominant:recessive", "9:3:3:1 phenotypic ratio"],
        a: 2,
        exp: "F2 monohybrids yielded ~3:1 dominant:recessive phenotypes."
      },
      {
        q: "Which is a correct definition from the slides?",
        choices: ["Phenotype is the DNA sequence at a locus", "Genotype is the observable trait", "Alleles are versions of a gene", "Zygote is the haploid product of meiosis"],
        a: 2,
        exp: "Alleles are alternative versions of a gene; genotype encodes phenotype."
      },
      {
        q: "A heterozygote for flower color in Mendel’s system would be written as:",
        choices: ["PP", "pp", "Pp", "pPp"],
        a: 2,
        exp: "Heterozygotes carry two different alleles, e.g., Pp."
      },
      {
        q: "What did Mendel observe when true‑breeding purple was crossed to true‑breeding white?",
        choices: ["F1 all white", "F1 all purple", "F1 50% purple, 50% white", "F1 pink"],
        a: 1,
        exp: "Dominance produced all violet flowers in F1."
      },
      {
        q: "Which term refers to a cross used to determine whether an individual with a dominant phenotype is homozygous or heterozygous?",
        choices: ["Reciprocal cross", "Backcross", "Test cross", "Self cross"],
        a: 2,
        exp: "A test cross uses a homozygous recessive tester to reveal hidden alleles."
      },
      {
        q: "Which pairing is correct per the terminology slides?",
        choices: ["Homozygote: PP or pp", "Heterozygote: PP", "Wildtype: always dominant", "Mutant: always recessive"],
        a: 0,
        exp: "Homozygotes carry identical alleles; dominance is independent of 'wildtype' usage."
      },
      {
        q: "Which best describes 'trait' as presented?",
        choices: ["A diploid cell", "A characteristic like flower color", "A specific DNA polymerase", "A mitochondrion"],
        a: 1,
        exp: "Traits are observable characteristics; alleles encode versions of the trait."
      },
      {
        q: "In the classic monohybrid cross, which F2 genotypic ratio did the slides highlight?",
        choices: ["1:1", "1:1:2", "1:2:1", "3:1"],
        a: 2,
        exp: "Genotypes distribute as 1 AA : 2 Aa : 1 aa."
      },
      {
        q: "Which line is true about Mendel’s experimental approach?",
        choices: ["Small sample sizes and qualitative scoring", "Large sample sizes and quantitative analysis", "Random trait choice without controls", "Focus on continuous variation only"],
        a: 1,
        exp: "Mendel emphasized large counts and clear, discontinuous traits."
      },
      {
        q: "Which is a reason peas allowed thousands of individuals to be evaluated?",
        choices: ["They are viviparous", "Each pea is a new individual seed", "They reproduce only once per decade", "They require animal pollinators"],
        a: 1,
        exp: "Each pea seed represents a new individual, enabling large datasets."
      },
      {
        q: "Which symbol set denotes later filial generations after F2?",
        choices: ["G3, G4…", "F3, F4…", "P3, P4…", "T3, T4…"],
        a: 1,
        exp: "Slides note F3, F4, etc., for successive generations."
      }
  ]
},

{
  key: "W12_Ch12_Part2_Testcross_Probability",
  label: "W12 Lecture15 Ch12 Part 2 – Test Crosses & Probability Rules",
  questions: [
      {
        q: "Mendel’s First Law is the law of:",
        choices: ["Independent assortment", "Probability addition", "Segregation", "Linkage"],
        a: 2,
        exp: "Allele pairs separate equally into gametes; fertilization recombines them."
      },
      {
        q: "A test cross predicts what F2 phenotypic ratio when the unknown is heterozygous (simple dominance)?",
        choices: ["1:1", "3:1", "2:1", "1:3"],
        a: 0,
        exp: "Crossing a heterozygote to a homozygous recessive gives 1:1 dom:rec."
      },
      {
        q: "Punnett squares are used to:",
        choices: ["Map chromosomes under a microscope", "Predict genotype and phenotype ratios from crosses", "Measure mutation rates directly", "Determine DNA sequences"],
        a: 1,
        exp: "They enumerate outcomes from parental gamete combinations."
      },
      {
        q: "The multiplicative (product) rule of probability applies when events are:",
        choices: ["Mutually exclusive", "Dependent", "Independent and ordered", "Impossible"],
        a: 2,
        exp: "Multiply probabilities of independent events occurring in sequence."
      },
      {
        q: "The additive (sum) rule of probability applies when events are:",
        choices: ["Mutually exclusive alternative outcomes", "Both must occur together", "Always dependent", "Continuous only"],
        a: 0,
        exp: "Sum probabilities for different ways to achieve an outcome when they cannot co‑occur."
      },
      {
        q: "In a test cross rr × R?, three round offspring out of three were observed. If R? is Rr, the probability of 3/3 round is:",
        choices: ["1/2", "1/4", "1/8", "3/4"],
        a: 2,
        exp: "Each child has 1/2 chance of being round; (1/2)^3 = 1/8."
      },
      {
        q: "A dihybrid individual produces how many distinct gamete types (assuming independent assortment)?",
        choices: ["2", "3", "4", "8"],
        a: 2,
        exp: "AaBb → AB, Ab, aB, ab."
      },
      {
        q: "For AaBb × AaBb, the classic phenotypic ratio is:",
        choices: ["3:1", "9:3:3:1", "1:1", "1:2:1"],
        a: 1,
        exp: "Independent assortment yields 9:3:3:1 across phenotypes."
      },
      {
        q: "Which statement about probability on the slides is TRUE?",
        choices: ["Probabilities range from −1 to 1", "A probability of 1 means certainty", "A probability of 0.5 means impossible", "Independent events must have equal probabilities"],
        a: 1,
        exp: "Slides define 0 to 1 range and meaning of 0 and 1."
      },
      {
        q: "Combining rules, the chance of rolling a 5 and a 4 in any order with two dice is:",
        choices: ["1/36", "1/18", "1/12", "1/6"],
        a: 1,
        exp: "Two ordered ways (5 then 4, or 4 then 5), each 1/36 → total 1/18."
      },
      {
        q: "In a heterozygote test cross, if you sample only a few progeny, the observed ratio may deviate due to:",
        choices: ["Linkage is guaranteed", "Small‑sample (sampling) error", "No independent assortment", "Mutation must have occurred"],
        a: 1,
        exp: "Small samples yield more variance around expected ratios."
      },
      {
        q: "Which cross best tests whether a purple‑flowered plant is PP or Pp?",
        choices: ["Purple × purple (random)", "Purple × pp", "Purple × PP", "Purple × Pp with no scoring"],
        a: 1,
        exp: "Cross to a homozygous recessive tester reveals hidden recessive alleles."
      },
      {
        q: "If events are independent, the probability of A and B both occurring equals:",
        choices: ["P(A) + P(B)", "P(A) × P(B)", "P(A) − P(B)", "P(A)/P(B)"],
        a: 1,
        exp: "Product rule for independent joint events."
      },
      {
        q: "In two independent births with equal sex probability, the chance of at least one boy and one girl is:",
        choices: ["1/4", "1/2", "3/4", "1"],
        a: 1,
        exp: "Outcomes BB, BG, GB, GG; favorable BG or GB = 2/4 = 1/2."
      },
      {
        q: "Which statement about dihybrid Punnett squares matches the slides?",
        choices: ["Each trait still shows a 3:1 split in F2 when counted separately", "Each trait loses segregation", "Only 1:2:1 is possible", "Ratios are random"],
        a: 0,
        exp: "Counting each trait marginally still yields the monohybrid 3:1."
      }
  ]
},

{
  key: "W12_Ch12_Part3_Pedigree_Dihybrid_ABO",
  label: "W12 Lecture15 Ch12 Part 3 – Pedigrees, Dihybrids, Incomplete Dominance, ABO",
  questions: [
      {
        q: "In pedigree charts, males are __ and females are __.",
        choices: ["circles; squares", "squares; circles", "triangles; squares", "diamonds; circles"],
        a: 1,
        exp: "Conventionally, squares represent males and circles represent females."
      },
      {
        q: "Alkaptonuria in a pedigree with affected offspring of unaffected parents most likely suggests:",
        choices: ["Autosomal dominant", "Autosomal recessive", "X‑linked dominant", "Mitochondrial"],
        a: 1,
        exp: "Recessive traits can appear among siblings when both parents are carriers."
      },
      {
        q: "A man without a widow’s peak marries a heterozygous woman (Ww). Probability their next child has a widow’s peak is:",
        choices: ["0", "1/4", "1/2", "3/4"],
        a: 2,
        exp: "Cross ww × Ww → 1/2 Ww (widow’s peak), 1/2 ww (no peak)."
      },
      {
        q: "The formal dihybrid cross of YyRr × YyRr yields which phenotypic ratio?",
        choices: ["1:2:1", "9:3:3:1", "3:1", "1:1"],
        a: 1,
        exp: "Independent assortment predicts 9:3:3:1."
      },
      {
        q: "Mendel’s second law states:",
        choices: ["Genes on the same chromosome assort independently", "Allele pairs separate during gamete formation", "Different traits assort independently (if unlinked)", "Dominant alleles are more common"],
        a: 2,
        exp: "Independent assortment applies to genes on different chromosomes or far apart."
      },
      {
        q: "Which cross illustrates incomplete dominance producing 1:2:1 phenotypes?",
        choices: ["RR × rr with F1 selfed", "RR × RR", "Rr × rr only", "rr × rr"],
        a: 0,
        exp: "RR × rr → all Rr (intermediate); Rr × Rr → 1:2:1 phenotypic ratio (e.g., red:pink:white)."
      },
      {
        q: "In a pedigree, a filled symbol represents:",
        choices: ["Carrier only", "Unknown", "Affected individual", "Proband only"],
        a: 2,
        exp: "Standard notation: shaded/filled indicates affected."
      },
      {
        q: "Multiple alleles at one locus can produce:",
        choices: ["Only two phenotypes", "An ordered dominance series", "No dominance effects", "Tetraploid offspring"],
        a: 1,
        exp: "Example slides: rabbit coat color allelic series with hierarchy of dominance."
      },
      {
        q: "In the ABO system, genotype IA i produces phenotype:",
        choices: ["AB", "A", "B", "O"],
        a: 1,
        exp: "IA is dominant to i, so phenotype A."
      },
      {
        q: "Which pattern is consistent with codominance in ABO?",
        choices: ["IA and IB both expressed in IAIB individuals", "IA masks IB completely", "IB masks IA completely", "i is codominant with IA"],
        a: 0,
        exp: "AB blood expresses both A and B antigens."
      },
      {
        q: "If you marginalize over one trait in a dihybrid F2, each single trait shows:",
        choices: ["1:1", "1:2:1", "3:1", "9:7"],
        a: 2,
        exp: "Each trait alone yields the monohybrid 3:1 distribution."
      },
      {
        q: "A pedigree symbol with a dot inside a circle typically indicates:",
        choices: ["Unaffected male", "Carrier female (for X‑linked recessive)", "Affected female", "Unknown"],
        a: 1,
        exp: "Carrier status for X‑linked recessive is often shown with a dot in female symbol."
      },
      {
        q: "Snapdragon color in the slides exemplifies:",
        choices: ["Codominance", "Incomplete dominance", "Complete dominance", "Epistasis"],
        a: 1,
        exp: "Heterozygotes (Rr) are pink—intermediate phenotype."
      },
      {
        q: "A key diagnostic of autosomal dominant inheritance is:",
        choices: ["Trait often skips generations", "Affected individuals usually have an affected parent", "Only males are affected", "Only in one sex"],
        a: 1,
        exp: "Dominant traits tend to appear in every generation."
      },
      {
        q: "Multiple alleles for rabbit coat color (C, cch, ch, c) demonstrate:",
        choices: ["Epistasis only", "An allelic dominance hierarchy", "Cytoplasmic inheritance", "Environmental inheritance"],
        a: 1,
        exp: "Slides show ordered dominance among multiple alleles at one gene."
      }
  ]
}
,
{
  key: "W12_Ch12_Part4_Extensions",
  label: "W12 Lecture15 Ch12 Part 4 – Extensions to Mendelian Genetics",
  questions: [
    { q: "Which slide term describes a single gene influencing multiple phenotypic traits (e.g., cystic fibrosis, sickle-cell)?",
      choices: ["Epistasis", "Penetrance", "Pleiotropy", "Polygeny"],
      a: 2,
      exp: "Pleiotropy = one gene with multiple phenotypic effects." },
    { q: "In Drosophila, the classic white vs red eye example illustrates a trait that is:",
      choices: ["Autosomal recessive", "Y-linked", "X-linked", "Mitochondrial"],
      a: 2,
      exp: "Eye color gene is on the X; red is dominant to white." },
    { q: "A red-eyed male fruit fly × white-eyed female yields what expectation for sons?",
      choices: ["All red-eyed sons", "All white-eyed sons", "50% red and 50% white sons", "No sons"],
      a: 1,
      exp: "Sons get X from mom; white-eyed mom gives the recessive allele to all sons." },
    { q: "For a white-eyed male × heterozygous red-eyed female in Drosophila, the offspring ratio is expected to be:",
      choices: ["All red-eyed", "All white-eyed", "1:1 red:white overall", "3:1 red:white overall"],
      a: 2,
      exp: "Carrier mother + white-eyed father gives ~1:1 across sexes." },
    { q: "The Manx cat example demonstrates a(n) __ allele that is lethal in the __ state.",
      choices: ["recessive; homozygous recessive", "dominant; homozygous dominant", "dominant; heterozygous", "recessive; heterozygous"],
      a: 1,
      exp: "Manx phenotype is heterozygous; homozygous dominant is lethal → 2:1 live ratio." },
    { q: "A 2:1 phenotypic ratio among live-born offspring suggests:",
      choices: ["Incomplete dominance", "Codominance", "Linkage", "A lethal genotype eliminating one class"],
      a: 3,
      exp: "Lethal genotypes remove one category → 2:1 among survivors." },
    { q: "In a trihybrid F2 under independent assortment and complete dominance, the chance of yellow, round, tall is computed as:",
      choices: ["Add the three 3:1 probabilities", "Multiply the three per-trait probabilities", "Divide by 3", "Use only a dihybrid square"],
      a: 1,
      exp: "Forked-line: 3/4 × 3/4 × 3/4 = 27/64." },
    { q: "Chromosomal crossover during meiosis generates:",
      choices: ["Only parental (non-recombinant) chromatids", "Recombinant and non-recombinant chromatids", "Only recombinant chromatids", "Tetraploid gametes"],
      a: 1,
      exp: "Exchange between homologs → two recombinant + two non-recombinant." },
    { q: "Epistasis occurs when:",
      choices: ["Genes occupy the same locus", "One gene masks/modifies the phenotypic expression of another gene", "Two alleles at one locus interact additively", "Environment changes genotype"],
      a: 1,
      exp: "Expression at one locus alters expression at a second locus." },
    { q: "In the mouse coat-color example, which statement matches the slide?",
      choices: ["A is epistatic to C; A blocks C", "C is epistatic to A; cc makes mice albino regardless of A", "Neither locus affects the other", "cc yields black regardless of A"],
      a: 1,
      exp: "Recessive cc prevents pigment, masking A; ratio modifies (e.g., 9:4:3)." },
    { q: "Polygenic inheritance typically produces which population pattern?",
      choices: ["Discrete 3:1 classes only", "A continuous distribution of phenotypes", "No variation", "Only two phenotypes"],
      a: 1,
      exp: "Many genes with small effects → continuous variation (height, skin color)." },
    { q: "Which trait on the slide is cited as highly polygenic (100+ genes)?",
      choices: ["Widow’s peak", "ABO blood type", "Human height", "Pea flower color"],
      a: 2,
      exp: "Height involves hundreds of loci." },
    { q: "A character whose phenotype depends strongly on both genotype and environment is termed:",
      choices: ["Unifactorial", "Hemizygous", "Multifactorial", "Neutral"],
      a: 2,
      exp: "Multifactorial = multiple genes + environment." },
    { q: "Which statement about environmental impact on phenotype aligns with the slides?",
      choices: ["Environment cannot alter phenotypic range", "Phenotypic range is often broadest for polygenic traits", "Genotype is irrelevant for phenotype", "Only diet influences traits"],
      a: 1,
      exp: "Polygenic traits show wide reaction norms with environment." },
    { q: "Homeotic mutants like Antennapedia illustrate that mutant alleles can be:",
      choices: ["Always recessive and silent", "Dominant and affect development of multiple characters", "Only X-linked", "Always lethal in heterozygotes"],
      a: 1,
      exp: "Dominant homeotic effects have broad developmental consequences." 
}
  ]
}
,
{
  key: "W14_Ch16_Part1_Prok_vs_Euk_and_trp",
  label: "W14 Lec16 Ch16 Part 1 — Prokaryotic vs Eukaryotic Regulation & trp Operon",
  questions: [
    {
      q: "Why would it be detrimental for a somatic cell to express all of its genes all the time?",
      choices: [
        "It would run out of chromosomes",
        "It would waste energy, space, and time",
        "It would become haploid",
        "It would stop dividing"
      ],
      a: 1,
      exp: "Simultaneous expression of all genes would require huge energy, crowd the cell with products, and prevent rapid, targeted responses."
    },
    {
      q: "Differential gene expression means that:",
      choices: [
        "Different cells contain different DNA sequences",
        "Each cell activates only a subset of genes from the same genome",
        "Gametes have no genes in common with somatic cells",
        "Genes change sequence during development"
      ],
      a: 1,
      exp: "All somatic cells share the same genome, but different subsets of genes are expressed in different cell types."
    },
    {
      q: "In prokaryotes, transcription and translation:",
      choices: [
        "Both occur only in the nucleus",
        "Are completely separated in space and time",
        "Occur simultaneously in the cytoplasm",
        "Do not require ribosomes"
      ],
      a: 2,
      exp: "Bacteria lack a nucleus, so ribosomes can begin translating mRNA while it is still being transcribed."
    },
    {
      q: "In prokaryotes, gene expression is regulated primarily at which level?",
      choices: [
        "Epigenetic",
        "Transcriptional",
        "Post-translational",
        "Nuclear export"
      ],
      a: 1,
      exp: "Most control is exerted at the transcriptional level, determining whether mRNA is made."
    },
    {
      q: "In eukaryotes, transcription and translation are separated by:",
      choices: [
        "The cell wall",
        "The nuclear membrane",
        "The Golgi apparatus",
        "The plasma membrane"
      ],
      a: 1,
      exp: "Transcription occurs in the nucleus, whereas translation takes place in the cytoplasm."
    },
    {
      q: "Which list correctly names levels at which eukaryotic gene expression can be regulated?",
      choices: [
        "Only transcriptional and translational",
        "Only epigenetic and transcriptional",
        "Epigenetic, transcriptional, post-transcriptional, translational, and post-translational",
        "Only post-transcriptional and post-translational"
      ],
      a: 2,
      exp: "Eukaryotes can regulate access to DNA, transcription, RNA processing/stability, translation, and protein activity."
    },
    {
      q: "In bacteria, genes with related functions are often clustered into:",
      choices: [
        "Introns",
        "Enhancers",
        "Operons",
        "Centromeres"
      ],
      a: 2,
      exp: "An operon contains multiple genes under control of a single promoter and regulatory region."
    },
    {
      q: "Which component of an operon is the binding site for RNA polymerase?",
      choices: [
        "Operator",
        "Promoter",
        "Repressor",
        "Enhancer"
      ],
      a: 1,
      exp: "The promoter is the DNA sequence where RNA polymerase binds to initiate transcription."
    },
    {
      q: "In a typical operon, the operator is best described as:",
      choices: [
        "A protein that blocks transcription",
        "A DNA sequence that can bind regulatory proteins",
        "A membrane channel",
        "A type of RNA"
      ],
      a: 1,
      exp: "The operator is a regulatory DNA segment where repressors or other proteins can bind to control transcription."
    },
    {
      q: "Which statement correctly matches regulator to its function in prokaryotic gene control?",
      choices: [
        "Repressors increase transcription",
        "Activators degrade mRNA",
        "Inducers directly splice introns",
        "Repressors can bind operators to block transcription"
      ],
      a: 3,
      exp: "Repressor proteins can bind the operator and physically block RNA polymerase."
    },
    {
      q: "In the trp operon, the five genes encode enzymes that:",
      choices: [
        "Degrade tryptophan",
        "Synthesize tryptophan",
        "Import lactose",
        "Export glucose"
      ],
      a: 1,
      exp: "The trp operon genes encode enzymes that build tryptophan from precursors."
    },
    {
      q: "The trp operon is described as:",
      choices: [
        "Inducible",
        "Repressible",
        "Constitutive",
        "Post-transcriptional"
      ],
      a: 1,
      exp: "It is normally on but can be repressed when tryptophan is abundant."
    },
    {
      q: "When tryptophan levels are high, tryptophan molecules:",
      choices: [
        "Bind directly to RNA polymerase",
        "Act as corepressors and activate the trp repressor",
        "Destroy the operator",
        "Insert into the promoter"
      ],
      a: 1,
      exp: "Tryptophan binds the repressor, activating it to bind the operator and shut down transcription."
    },
    {
      q: "What happens when the tryptophan-repressor complex binds to the operator of the trp operon?",
      choices: [
        "RNA polymerase can easily transcribe",
        "The operon switches on",
        "RNA polymerase is blocked and transcription stops",
        "Ribosomes dissociate from the operon"
      ],
      a: 2,
      exp: "The repressor complex physically blocks RNA polymerase from transcribing the structural genes."
    },
    {
      q: "When tryptophan is absent, the trp repressor protein:",
      choices: [
        "Cannot bind the operator, so transcription proceeds",
        "Binds the operator and blocks transcription",
        "Degrades tryptophan",
        "Binds the promoter instead"
      ],
      a: 0,
      exp: "Without tryptophan, the repressor is inactive and cannot bind the operator, allowing RNA polymerase to transcribe the operon."
    },
    {
      q: "The trp operon uses negative regulation because:",
      choices: [
        "An activator turns transcription on",
        "A repressor binds DNA to silence expression",
        "RNA polymerase is a negative regulator",
        "The mRNA is degraded immediately"
      ],
      a: 1,
      exp: "Negative regulators like the trp repressor inhibit transcription when bound to DNA."
    },
    {
      q: "Which advantage of gene regulation is explicitly emphasized for cells?",
      choices: [
        "Avoiding DNA replication",
        "Maximizing mutation rates",
        "Conserving energy and resources by expressing genes only when needed",
        "Eliminating operons"
      ],
      a: 2,
      exp: "Regulation prevents unnecessary synthesis of RNAs and proteins, saving cellular energy and materials."
    },
    {
      q: "Which statement about somatic cells is accurate?",
      choices: [
        "Each somatic cell contains only a subset of the genome",
        "Different somatic cells in an individual typically have identical DNA content",
        "Somatic cells contain more genes than germ cells",
        "Somatic cells lack regulatory mechanisms"
      ],
      a: 1,
      exp: "Nearly all somatic cells carry the full genome but express different subsets of genes."
    },
    {
      q: "In the gene expression overview, eukaryotic regulation is described as:",
      choices: [
        "Simpler than prokaryotic regulation",
        "Restricted to operons",
        "Occurring at many stages from chromatin to protein modification",
        "Limited to mRNA degradation"
      ],
      a: 2,
      exp: "Eukaryotes regulate at epigenetic, transcriptional, post-transcriptional, translational, and post-translational steps."
    },
    {
      q: "The nucleoid region in bacteria is:",
      choices: [
        "Membrane-bound like a nucleus",
        "Where the circular chromosome is found",
        "Filled with intron-rich DNA",
        "Composed entirely of ribosomes"
      ],
      a: 1,
      exp: "Prokaryotic DNA is located in a dense region called the nucleoid, not enclosed by a membrane."
    }
  ]
},

{
  key: "W14_Ch16_Part2_lac_CAP_Epigenetics",
  label: "W14 Lec16 Ch16 Part 2 — lac Operon, CAP, & Epigenetic Regulation",
  questions: [
    {
      q: "When glucose levels fall in E. coli, levels of which small molecule increase?",
      choices: [
        "ATP",
        "cAMP",
        "Lactose",
        "Tryptophan"
      ],
      a: 1,
      exp: "Low glucose leads to elevated cyclic AMP (cAMP), which partners with CAP."
    },
    {
      q: "The cAMP–CAP complex acts primarily as:",
      choices: [
        "A negative regulator that blocks the promoter",
        "An enzyme that digests lactose",
        "A positive regulator that enhances RNA polymerase binding",
        "A ribosome that translates lac mRNA"
      ],
      a: 2,
      exp: "cAMP-bound CAP binds near the lac promoter and stabilizes RNA polymerase, boosting transcription."
    },
    {
      q: "The lac operon is classified as:",
      choices: [
        "Repressible",
        "Inducible",
        "Constitutive",
        "Epigenetic"
      ],
      a: 1,
      exp: "It is usually off and becomes active (induced) when lactose is present and glucose is low."
    },
    {
      q: "Which condition leads to **highest** lac operon transcription?",
      choices: [
        "High glucose, no lactose",
        "High glucose, high lactose",
        "Low glucose, high lactose",
        "Low glucose, no lactose"
      ],
      a: 2,
      exp: "Low glucose raises cAMP–CAP and high lactose removes the repressor, maximizing transcription."
    },
    {
      q: "In the absence of lactose, the lac repressor:",
      choices: [
        "Cannot bind DNA",
        "Binds the operator and blocks transcription",
        "Activates RNA polymerase",
        "Is degraded"
      ],
      a: 1,
      exp: "Without lactose (allolactose), the repressor binds the operator and prevents RNA polymerase from transcribing."
    },
    {
      q: "Inducible operons, such as lac, are typically:",
      choices: [
        "Involved in anabolic pathways that build molecules",
        "Involved in catabolic pathways that break down substrates when present",
        "Always expressed at high levels",
        "Found only in eukaryotes"
      ],
      a: 1,
      exp: "They turn on when a substrate (like lactose) is available to be metabolized."
    },
    {
      q: "Why is the lac operon generally off when glucose is abundant?",
      choices: [
        "Glucose directly blocks the promoter",
        "Cells prefer glucose and do not need to express lactose-utilizing enzymes",
        "Glucose destroys the repressor",
        "Lactose cannot enter the cell"
      ],
      a: 1,
      exp: "Using glucose first is more efficient, so the lac operon stays off until glucose is scarce."
    },
    {
      q: "Which phrase best describes a positive regulator?",
      choices: [
        "A protein that binds DNA to decrease transcription",
        "A molecule that degrades mRNA",
        "A protein that binds near the promoter to increase transcription",
        "A protein that methylates cytosines"
      ],
      a: 2,
      exp: "Positive regulators like CAP enhance the likelihood that RNA polymerase initiates transcription."
    },
    {
      q: "The table of signals for lac operon transcription emphasizes that gene expression responds to:",
      choices: [
        "Only lactose concentration",
        "Only glucose concentration",
        "The combination of glucose, cAMP–CAP activity, lactose, and repressor binding",
        "Temperature alone"
      ],
      a: 2,
      exp: "Transcription integrates multiple signals: glucose status, cAMP–CAP, lactose, and repressor binding."
    },
    {
      q: "Eukaryotic gene expression is said to be more complex than prokaryotic regulation because:",
      choices: [
        "Eukaryotes have no promoters",
        "Transcription and translation occur in the same compartment",
        "Regulation can occur at many levels, starting with chromatin accessibility",
        "Eukaryotic DNA lacks histones"
      ],
      a: 2,
      exp: "Separation by a nucleus and chromatin packaging create many additional regulatory layers."
    },
    {
      q: "Epigenetic regulation refers to:",
      choices: [
        "Mutations in coding sequences",
        "Permanent changes to DNA sequence only",
        "Reversible chemical modifications to DNA or histone proteins that alter gene expression without changing nucleotide sequence",
        "Alternative splicing of RNA"
      ],
      a: 2,
      exp: "Epigenetic marks such as methylation and acetylation change gene activity without altering base sequence."
    },
    {
      q: "Nucleosomes consist of DNA wrapped around:",
      choices: [
        "RNA polymerase",
        "Histone proteins",
        "Ribosomes",
        "Transcription factors"
      ],
      a: 1,
      exp: "DNA coils around histone octamers to form nucleosomes."
    },
    {
      q: "When nucleosomes are spaced very close together along DNA:",
      choices: [
        "Transcription factors can easily bind promoters",
        "DNA is highly accessible",
        "Transcription is typically turned off",
        "More RNA polymerase binds"
      ],
      a: 2,
      exp: "Tightly packed nucleosomes occlude DNA, preventing transcription factors from binding."
    },
    {
      q: "When nucleosomes are spaced far apart and chromatin is open:",
      choices: [
        "Transcription factors can bind and gene expression is more likely",
        "DNA replication stops",
        "RNA polymerase is excluded",
        "Genes are permanently silenced"
      ],
      a: 0,
      exp: "Open chromatin exposes regulatory sequences to transcription factors and polymerases."
    },
    {
      q: "Chemical tags such as methyl, acetyl, and phosphate groups added to histones:",
      choices: [
        "Always destroy histones",
        "Signal whether a chromosomal region should be open or closed",
        "Remove DNA from the nucleus",
        "Convert RNA to DNA"
      ],
      a: 1,
      exp: "These reversible tags recruit proteins that compact or relax chromatin, influencing gene expression."
    },
    {
      q: "DNA methylation in CpG islands within promoters is usually associated with:",
      choices: [
        "Increased transcription",
        "Gene silencing",
        "Frameshift mutations",
        "Chromosome duplication"
      ],
      a: 1,
      exp: "Heavily methylated promoter regions tend to be transcriptionally inactive."
    },
    {
      q: "Imprinted genes are those that:",
      choices: [
        "Are only expressed in bacteria",
        "Retain a parent-specific methylation pattern that can silence one allele in offspring",
        "Cannot be methylated",
        "Always undergo recombination"
      ],
      a: 1,
      exp: "Parental-origin–specific methylation can silence either the maternal or paternal allele."
    },
    {
      q: "The NASA twin study highlighted that long-term spaceflight produced changes in:",
      choices: [
        "Only blood type",
        "Methylation patterns and gene expression that were largely reversible after return to Earth",
        "DNA sequence in all cells",
        "Number of chromosomes"
      ],
      a: 1,
      exp: "Many methylation and expression changes occurred in space but mostly returned toward baseline after the mission."
    },
    {
      q: "Which statement about epigenetic tags is TRUE?",
      choices: [
        "They are permanent and cannot be removed",
        "They never affect gene expression",
        "They can be added or removed in response to environment and development",
        "They always activate transcription"
      ],
      a: 2,
      exp: "Tags are dynamic and reversible, allowing cells to adjust gene expression without altering sequence."
    },
    {
      q: "In the genome organization slide, why must expressed genes be unwound?",
      choices: [
        "RNA polymerase can only bind tightly compacted chromatin",
        "Histones are required for transcription",
        "Polymerases and transcription factors require access to exposed DNA sequences",
        "Unwinding triggers DNA replication"
      ],
      a: 2,
      exp: "Active genes must be in open chromatin so regulatory proteins can contact promoters and coding regions."
    }
  ]
},

{
  key: "W14_Ch16_Part3_TranscriptionFactors",
  label: "W14 Lec16 Ch16 Part 3 — Eukaryotic Transcription Factors & Enhancers",
  questions: [
    {
      q: "Eukaryotic gene transcription requires which main enzyme?",
      choices: [
        "DNA polymerase III",
        "RNA polymerase II for protein-coding genes",
        "Lactase",
        "Reverse transcriptase only"
      ],
      a: 1,
      exp: "RNA polymerase II transcribes mRNAs and needs transcription factors to initiate."
    },
    {
      q: "Transcription factors are:",
      choices: [
        "Lipids that bind membranes",
        "Proteins that bind DNA regulatory sequences and help control transcription",
        "Carbohydrates attached to histones",
        "Components of ribosomes only"
      ],
      a: 1,
      exp: "They recognize specific DNA motifs and recruit or modulate RNA polymerase."
    },
    {
      q: "General (basal) transcription factors:",
      choices: [
        "Bind only enhancers far from the promoter",
        "Bind the core promoter and help RNA polymerase bind",
        "Are unique to each cell type",
        "Degrade mRNA"
      ],
      a: 1,
      exp: "Basal factors assemble at the core promoter and are required for all transcription by RNA polymerase II."
    },
    {
      q: "Specific transcription factors:",
      choices: [
        "Bind exactly the same sequence at every gene",
        "Only repress transcription",
        "Bind to additional regulatory regions to enhance or repress transcription of particular genes",
        "Replace RNA polymerase"
      ],
      a: 2,
      exp: "They recognize distinct DNA sites and modulate activity of specific sets of genes."
    },
    {
      q: "The promoter is:",
      choices: [
        "A protein that binds TATA box",
        "A DNA region upstream of the coding sequence where transcription is initiated",
        "An RNA that stabilizes ribosomes",
        "The start codon"
      ],
      a: 1,
      exp: "Promoters contain core sequences like the TATA box that recruit basal transcription factors and RNA polymerase."
    },
    {
      q: "The TATA box is:",
      choices: [
        "A protein complex that binds mRNA",
        "A DNA sequence rich in thymine and adenine near the transcription start site",
        "A type of histone tail",
        "An intron removed from pre-mRNA"
      ],
      a: 1,
      exp: "It is a consensus DNA motif (e.g., TATAAA) within many promoters."
    },
    {
      q: "TFIID contains a TATA-binding protein (TBP) whose role is to:",
      choices: [
        "Add caps to mRNA",
        "Bind the TATA box and help assemble other transcription factors and RNA polymerase",
        "Splice introns",
        "Terminate transcription"
      ],
      a: 1,
      exp: "Binding of TBP to TATA starts formation of the transcription initiation complex."
    },
    {
      q: "After transcription factors assemble at the promoter, RNA polymerase II is activated when:",
      choices: [
        "It is degraded",
        "Its C-terminal domain is phosphorylated and part of the complex is released",
        "It binds ribosomes",
        "It exits the nucleus"
      ],
      a: 1,
      exp: "Phosphorylation changes the polymerase so it can leave the promoter and begin elongation."
    },
    {
      q: "Promoter-proximal elements are:",
      choices: [
        "Random mutations",
        "RNA sequences in the 3' UTR",
        "Additional DNA binding sites near the core promoter",
        "Mitochondrial genomes"
      ],
      a: 2,
      exp: "They are close to the promoter and bind transcription factors that modulate transcription."
    },
    {
      q: "Cis-acting elements are defined as:",
      choices: [
        "Proteins that move between cells",
        "DNA sequences that influence transcription of genes on the same DNA molecule",
        "RNA molecules that always repress genes",
        "Environmental signals only"
      ],
      a: 1,
      exp: "Cis elements are DNA regions such as promoters and enhancers located on the same chromosome as the gene they regulate."
    },
    {
      q: "An enhancer is:",
      choices: [
        "A protein that methylates DNA",
        "A DNA sequence that increases transcription when bound by activator proteins",
        "A type of repressor",
        "A ribosomal RNA"
      ],
      a: 1,
      exp: "Enhancers can be far from promoters but, when bound by activators, greatly boost transcription."
    },
    {
      q: "Distal control elements:",
      choices: [
        "Are tiny ribosomes",
        "Are short DNA sequences within enhancers that bind specific activator proteins",
        "Are the same as core promoters",
        "Only occur in bacteria"
      ],
      a: 1,
      exp: "Each distal element has its own activator protein; combinations create complex regulatory codes."
    },
    {
      q: "A DNA-bending protein helps transcription by:",
      choices: [
        "Breaking the DNA backbone",
        "Flattening chromatin",
        "Changing DNA shape so enhancers and bound activators can contact the promoter complex",
        "Blocking RNA polymerase"
      ],
      a: 2,
      exp: "Bending brings distant enhancer-bound proteins into physical contact with the promoter and mediator complex."
    },
    {
      q: "Mediator proteins in transcription complexes function to:",
      choices: [
        "Degrade histones",
        "Bridge activators at enhancers with RNA polymerase and general transcription factors at the promoter",
        "Export mRNA",
        "Attach amino acids to tRNA"
      ],
      a: 1,
      exp: "Mediator is a large complex that transmits regulatory signals from distal elements to the core transcription machinery."
    },
    {
      q: "Cell-type–specific transcription arises largely because:",
      choices: [
        "Different cell types have completely different genomes",
        "Different control elements are present",
        "Different cell types express different sets of activator proteins that bind the same DNA control elements",
        "Promoters are absent in some cells"
      ],
      a: 2,
      exp: "Albumin and crystalline genes, for example, share DNA control elements but use different activator combinations in liver vs lens cells."
    },
    {
      q: "In liver cells, albumin gene expression is high because:",
      choices: [
        "Albumin enhancers are absent",
        "Only crystalline activators are present",
        "Activator proteins for albumin are present and bind its control elements",
        "The gene lacks a promoter"
      ],
      a: 2,
      exp: "Liver cells produce the activators that recognize albumin distal control elements, turning that gene on."
    },
    {
      q: "In lens cells of the eye, the crystalline gene is expressed while albumin is off because:",
      choices: [
        "Crystalline is closer to the promoter",
        "Only crystalline activator proteins are available in lens cells",
        "The albumin gene is deleted",
        "RNA polymerase is absent"
      ],
      a: 1,
      exp: "Lens cells produce the specific activators that bind crystalline control elements but not those of albumin."
    },
    {
      q: "A key idea from the cell-type–specific transcription slides is that:",
      choices: [
        "Every gene uses a unique promoter architecture",
        "A combination of control elements and activators creates precise expression patterns",
        "Enhancers are not important",
        "Only repressors determine expression"
      ],
      a: 1,
      exp: "The same DNA sequence can integrate different sets of activators in different cells to specify which gene is on."
    },
    {
      q: "Which sequence correctly links structures from DNA outward in this part of the chapter?",
      choices: [
        "Promoter → enhancer → general factors → RNA polymerase → mRNA",
        "Enhancer/distal elements + activators → DNA bending → mediator + general factors at promoter → RNA polymerase II",
        "Ribosome → enhancer → mRNA → promoter",
        "Histones → tRNA → activator"
      ],
      a: 1,
      exp: "Enhancer-bound activators communicate through DNA bending and mediator with the initiation complex at the promoter."
    },
    {
      q: "Which statement about promoters and enhancers is TRUE?",
      choices: [
        "Promoters can function thousands of base pairs away from genes, enhancers cannot",
        "Enhancers must be immediately adjacent to the transcription start site",
        "Promoters are required for basal transcription; enhancers modulate the rate and specificity",
        "Only enhancers bind RNA polymerase"
      ],
      a: 2,
      exp: "Core promoters define where transcription starts; enhancers adjust when and how strongly genes are expressed."
    }
  ]
},

{
  key: "W14_Ch16_Part4_PostTranscription_and_Cancer",
  label: "W14 Lec16 Ch16 Part 4 — Post-Transcriptional Control, Translation, & Cancer",
  questions: [
    {
      q: "Post-transcriptional gene regulation in eukaryotes begins with:",
      choices: [
        "DNA replication",
        "Pre-mRNA processing such as splicing, capping, and polyadenylation",
        "Chromosome condensation",
        "Centrosome duplication"
      ],
      a: 1,
      exp: "Pre-mRNA must be processed into mature mRNA before translation; this processing can be regulated."
    },
    {
      q: "Alternative splicing allows a single gene to:",
      choices: [
        "Change its DNA sequence",
        "Produce different mRNA isoforms and protein variants",
        "Double the chromosome number",
        "Eliminate exons completely from the genome"
      ],
      a: 1,
      exp: "By including or skipping certain exons, one gene can give rise to multiple related proteins."
    },
    {
      q: "Which statement about exons in alternative splicing is TRUE?",
      choices: [
        "Exons can be rearranged into any order",
        "Exons must remain in the original order, though some may be skipped",
        "Exons are always removed",
        "Exons are introns"
      ],
      a: 1,
      exp: "Slides emphasize that exons cannot be out of order; splicing can skip but not reorder them."
    },
    {
      q: "Errors in splicing that remove an essential exon are usually:",
      choices: [
        "Beneficial to the organism",
        "Lethal to the mRNA",
        "Deleterious, although occasionally they may produce an advantageous new variant",
        "Ignored by the cell"
      ],
      a: 2,
      exp: "Most mis-splicing events harm function, but rare ones can create beneficial protein variants."
    },
    {
      q: "The 5' and 3' untranslated regions (UTRs) of mRNA:",
      choices: [
        "Do not play any role in regulation",
        "Are removed during translation",
        "Contain binding sites for RNA-binding proteins that influence mRNA stability and translation",
        "Are translated into signal peptides"
      ],
      a: 2,
      exp: "RNA-binding proteins at UTRs can control where, how long, and how efficiently mRNAs are translated."
    },
    {
      q: "A 5' cap on eukaryotic mRNA is:",
      choices: [
        "A methylated guanosine that protects from exonucleases",
        "A poly-U tail that triggers degradation",
        "A histone protein",
        "A spliceosome"
      ],
      a: 0,
      exp: "The methyl-G cap helps prevent 5' degradation and assists in initiation of translation."
    },
    {
      q: "The poly-A tail on mRNA primarily functions to:",
      choices: [
        "Provide a start codon",
        "Prevent degradation and aid export/translation",
        "Bind tRNA directly",
        "Cut DNA"
      ],
      a: 1,
      exp: "A long tail of adenosines stabilizes mRNA and influences its lifespan and translation efficiency."
    },
    {
      q: "microRNAs (miRNAs) are:",
      choices: [
        "Long coding RNAs",
        "Short noncoding RNAs that guide silencing complexes to target mRNAs",
        "Histone proteins",
        "Small DNA molecules"
      ],
      a: 1,
      exp: "They associate with RISC and base-pair with complementary mRNAs to repress translation or promote degradation."
    },
    {
      q: "The RNA-induced silencing complex (RISC) functions to:",
      choices: [
        "Transcribe DNA",
        "Splice introns",
        "Bind miRNA and target complementary mRNAs for repression or degradation",
        "Add poly-A tails"
      ],
      a: 2,
      exp: "RISC–miRNA complexes recognize specific mRNAs and usually reduce their expression."
    },
    {
      q: "The initiation of translation in eukaryotes begins when:",
      choices: [
        "eIF-2 binds GTP and the small ribosomal subunit",
        "RNA polymerase binds the promoter",
        "tRNA leaves the ribosome",
        "mRNA is exported without factors"
      ],
      a: 0,
      exp: "GTP-bound eIF-2 associates with the 40S subunit and initiator tRNA to form part of the initiation complex."
    },
    {
      q: "Phosphorylation of eIF-2 has what effect?",
      choices: [
        "Allows GTP to bind more strongly",
        "Prevents GTP binding and blocks translation initiation",
        "Elongates the poly-A tail",
        "Splices introns faster"
      ],
      a: 1,
      exp: "Phosphorylated eIF-2 cannot bind GTP, so the initiation complex fails to form and translation is reduced."
    },
    {
      q: "Regulation at the translation initiation complex allows the cell to:",
      choices: [
        "Control DNA replication rate",
        "Rapidly up- or down-regulate protein synthesis from existing mRNAs",
        "Change mutation rates",
        "Alter chromosome number"
      ],
      a: 1,
      exp: "By modulating initiation factors, cells can quickly adjust translation in response to conditions."
    },
    {
      q: "Post-translational modifications regulate proteins by:",
      choices: [
        "Changing DNA sequence",
        "Adding or removing chemical groups that alter activity or lifetime",
        "Transcribing them again",
        "Moving them to mitochondria only"
      ],
      a: 1,
      exp: "Phosphorylation, acetylation, ubiquitination, and other modifications can activate, inactivate, or mark proteins for degradation."
    },
    {
      q: "Ubiquitin tagging of a protein usually signals that the protein:",
      choices: [
        "Will be exported from the cell",
        "Will be translated again",
        "Should be degraded by the proteasome",
        "Will be inserted into membranes"
      ],
      a: 2,
      exp: "Chains of ubiquitin mark proteins for destruction in the proteasome."
    },
    {
      q: "Cancer is described as a disease of:",
      choices: [
        "Normal gene expression",
        "Altered gene expression and cell-cycle control",
        "Only viral infection",
        "Reduced mutation"
      ],
      a: 1,
      exp: "Mutations and regulatory changes mis-control genes that govern cell division, survival, and differentiation."
    },
    {
      q: "Tumor suppressor genes such as p53 normally:",
      choices: [
        "Drive cell division regardless of damage",
        "Help prevent inappropriate cell growth and can trigger repair or apoptosis",
        "Are expressed only in bacteria",
        "Cause cancer when active"
      ],
      a: 1,
      exp: "They function as brakes on the cell cycle; loss-of-function mutations often contribute to cancer."
    },
    {
      q: "p53 is notable because:",
      choices: [
        "It is mutated in over half of all cancer types and acts as a transcription factor",
        "It is a microRNA that silences oncogenes",
        "It is only found in plants",
        "It is a DNA methyltransferase"
      ],
      a: 0,
      exp: "The slides highlight p53 as a frequently mutated tumor suppressor and transcription factor."
    },
    {
      q: "Proto-oncogenes are genes that:",
      choices: [
        "Always prevent cell division",
        "Are positive regulators of the cell cycle that can become cancer-promoting when mutated or overexpressed",
        "Encode histones only",
        "Cannot mutate"
      ],
      a: 1,
      exp: "When proto-oncogenes are activated inappropriately, they become oncogenes that drive cancer."
    },
    {
      q: "Overexpression of the epidermal growth factor receptor (EGFR) in some breast cancers leads to:",
      choices: [
        "Reduced signaling and cell division",
        "Activation of protein kinases and transcription factors that promote cell-cycle genes",
        "Loss of all transcription factors",
        "Immediate apoptosis"
      ],
      a: 1,
      exp: "Excessive EGFR signaling activates downstream pathways that increase cell proliferation."
    },
    {
      q: "Targeted therapies that block EGFR activity are expected to:",
      choices: [
        "Increase mutation rates",
        "Prevent activation of downstream transcription factors and slow tumor growth",
        "Make all cells divide faster",
        "Replace tumor suppressor genes"
      ],
      a: 1,
      exp: "Inhibiting overactive EGFR signaling can reduce expression of genes driving uncontrolled proliferation."
  
      }
    ]
  }
], []);/** --------------------------- Helpers --------------------------- **/

// Helpers to manage multi-select state (handled inline in the component)

  const ALL = { key: "ALL", label: "All (Mixed)" };

  // Shuffle array (Fisher–Yates)
  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // Randomize answer choices while tracking the correct index
  const shuffleChoices = (q) => {
    const idxs = q.choices.map((_, i) => i);
    const shuffled = shuffle(idxs);
    const newChoices = shuffled.map((i) => q.choices[i]);
    const newAnswer = shuffled.indexOf(q.a);
    return { ...q, choices: newChoices, a: newAnswer };
  };

  const getPool = (moduleKeysSel) => {
  // If "All" is selected OR nothing selected, return all questions
  if (!moduleKeysSel || moduleKeysSel.includes(ALL.key)) {
    return modules.flatMap((m) => m.questions.map((q) => ({ ...q, module: m.label })));
  }
  // Otherwise, union of the selected modules
  const pools = moduleKeysSel.flatMap((k) => {
    const m = modules.find((mm) => mm.key === k);
    return (m?.questions || []).map((q) => ({ ...q, module: m?.label || k }));
  });
  return pools;
};

  /** --------------------------- Session State --------------------------- **/
  const [moduleKeys, setModuleKeys] = useState([ALL.key]);
const [reviewFilter, setReviewFilter] = useState("all");
  const [reviewSingleIndex, setReviewSingleIndex] = useState(null);
  const [desiredCount, setDesiredCount] = useState("all");
  const [sessionQs, setSessionQs] = useState([]); // questions for this session
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState({}); // qIndex -> choiceIndex
  const [locked, setLocked] = useState({}); // qIndex -> true after submit
  const [showSummary, setShowSummary] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  // --- Timing & per-question results ---
  const [startTime, setStartTime] = useState(Date.now()); // timestamp when current question became active
  const [timeSpent, setTimeSpent] = useState({});         // { [qIndex]: seconds }
  const [perResult, setPerResult] = useState({});         // { [qIndex]: true if correct }
  const fmtTime = (sec) => {
    if (sec == null) return "-";
    const m = Math.floor(sec / 60);
    const s = Math.max(0, sec % 60);
    return `${m}:${String(s).padStart(2,"0")}`;
  };


// ---- Persistent per-question stats (spaced selection) ----
const STATS_KEY = "bioMegaQuizStats_v1";
const loadStats = () => {
  try { return JSON.parse(localStorage.getItem(STATS_KEY) || "{}"); } catch { return {}; }
};
const saveStats = (s) => {
  try { localStorage.setItem(STATS_KEY, JSON.stringify(s)); } catch {}
};
// Stable id for a question: module key + question text hash
const getQID = (moduleKey, q) => {
  const base = `${moduleKey}|${q.q}`;
  let h = 0;
  for (let i = 0; i < base.length; i++) { h = ((h << 5) - h) + base.charCodeAt(i); h |= 0; }
  return `${moduleKey}:${h}`;
};


  // Build a new session
  const buildSession = (selectedKeys = [ALL.key], desiredCount = "all") => {
  const asArray = (v) => Array.isArray(v) ? v : [v];
  const keys = asArray(selectedKeys || [ALL.key]);
  const isAll = keys.includes(ALL.key);

  const stats = (typeof loadStats === "function") ? loadStats() : {};

  const pool = [];
  modules.forEach((mod) => {
    if (!isAll && !keys.includes(mod.key)) return;
    (mod.questions || []).forEach((q) => {
      const id = (typeof getQID === "function") ? getQID(mod.key, q) : `${mod.key}|${q.q}`;
      const rec = stats[id] || { attempts: 0, correct: 0, lastWrong: false };
      pool.push({ ...q, module: mod.label, __id: id, __stats: rec, __moduleKey: mod.key });
    });
  });

  const total = pool.length;
  let n = (desiredCount === "all" || desiredCount == null) ? total : parseInt(desiredCount, 10);
  if (!Number.isFinite(n) || n <= 0) n = Math.max(1, Math.min(15, total));
  n = Math.min(n, total);

  const wrongFirst = pool.filter(x => x.__stats && x.__stats.lastWrong === true);
  const untested  = pool.filter(x => !x.__stats || !x.__stats.attempts);
  const others    = pool.filter(x => x.__stats && x.__stats.attempts && !x.__stats.lastWrong);

  const shuffleInPlace = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  };
  shuffleInPlace(wrongFirst);
  shuffleInPlace(untested);
  shuffleInPlace(others);

  const pick = [];
  for (const q of wrongFirst) { if (pick.length >= n) break; pick.push(q); }
  for (const q of untested)   { if (pick.length >= n) break; if (!pick.includes(q)) pick.push(q); }
  for (const q of others)     { if (pick.length >= n) break; if (!pick.includes(q)) pick.push(q); }

  shuffleInPlace(pick);

  setSessionQs(pick.slice(0, n));
  setCurrent(0);
  setSelected({});
  setLocked({});
  setShowSummary(false);
  setReviewMode(false);
  if (typeof setReviewFilter === "function") setReviewFilter("all");
  if (typeof setReviewSingleIndex === "function") setReviewSingleIndex(null);
  if (typeof setTimeSpent === "function") setTimeSpent({});
  if (typeof setPerResult === "function") setPerResult({});
  if (typeof setStartTime === "function") setStartTime(Date.now());
};;

  useEffect(() => { buildSession([ALL.key], "all");
  /* auto rebuild on module selection change */
  // Rebuild when module list or desired count changes
  // (avoid if user prefers manual control by commenting this out)
  // eslint-disable-next-line react-hooks/exhaustive-deps

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    buildSession(moduleKeys, desiredCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleKeys, desiredCount]);

  const attempted = Object.keys(locked).length;
  const correct = Object.entries(locked).reduce((acc, [idx]) => {
    const i = parseInt(idx, 10);
    const isCorrect = selected[i] === sessionQs[i]?.a;
    return acc + (isCorrect ? 1 : 0);
  }, 0);

  const percentAnswered = sessionQs.length ? Math.round((attempted / sessionQs.length) * 100) : 0;

  const onSubmit = () => {
    if (locked[current]) return;
    if (selected[current] == null) return; // must select something

    // --- record time spent on this question up to submit ---
    try {
      const now = Date.now();
      const elapsedSec = Math.round((now - startTime) / 1000);
      if (!isNaN(elapsedSec)) {
        setTimeSpent(prev => ({ ...prev, [current]: (elapsedSec < 0 ? 0 : elapsedSec) }));
      }
      // store correctness snapshot for summary table
      const isCorrectNow = selected[current] === sessionQs[current]?.a;
      setPerResult(prev => ({ ...prev, [current]: !!isCorrectNow }));
      setStartTime(now); // reset timer for next question
    } catch {}

// Update spaced-repetition stats (localStorage)
try {
  const stats = loadStats();
  const cur = sessionQs[current];
  if (cur && cur.__id) {
    const id = cur.__id;
    const wasCorrect = selected[current] === (cur?.a);
    const rec = stats[id] || { attempts: 0, correct: 0, lastWrong: false };
    rec.attempts += 1;
    if (wasCorrect) {
      rec.correct += 1;
      rec.lastWrong = false;
    } else {
      rec.lastWrong = true;
    }
    rec.lastAttemptTs = Date.now();
    stats[id] = rec;
    saveStats(stats);
  }
} catch {}
setLocked((prev) => ({ ...prev, [current]: true }));
  };

  const onNext = () => setCurrent((c) => Math.min(c + 1, sessionQs.length - 1));
  const onPrev = () => setCurrent((c) => Math.max(c - 1, 0));

  const onFinish = () => {
    // Only allow finishing when all questions are submitted
    if (attempted === sessionQs.length) setShowSummary(true);
  };

  const onRestart = () => buildSession(moduleKeys, desiredCount);

  /** --------------------------- UI --------------------------- **/
  const currentQ = sessionQs[current];

  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl">
        {/* Header / Controls */}
        <div className="mb-4 grid gap-3 md:grid-cols-2">
          <div className="p-4 rounded-2xl shadow bg-white">
            <div className="text-sm text-slate-600 mb-1">Module</div>
            <div className="flex flex-col gap-2">
  <label className="text-sm text-slate-600">Modules (multi-select):</label>
  <div className="flex gap-2 flex-wrap">
    <button
      type="button"
      onClick={() => setModuleKeys([ALL.key])}
      className="rounded-xl bg-slate-100 px-3 py-1 text-slate-800 shadow hover:bg-slate-200"
      title="Select all modules (Mixed)"
    >
      All
    </button>
    <button
      type="button"
      onClick={() => setModuleKeys([])}
      className="rounded-xl bg-slate-100 px-3 py-1 text-slate-800 shadow hover:bg-slate-200"
      title="Clear selection"
    >
      Clear
    </button>
  </div>
  <select
    multiple
    value={moduleKeys}
    onChange={(e) => {
      const opts = Array.from(e.target.selectedOptions).map(o => o.value);
      // If user selects ALL, collapse to [ALL.key]
      if (opts.includes(ALL.key)) {
        setModuleKeys([ALL.key]);
      } else {
        setModuleKeys(opts);
      }
    }}
    className="min-h-32 rounded-2xl border border-slate-300 bg-white px-3 py-2 shadow-sm"
    size={Math.min(8, modules.length + 1)}
  >
    <option value={ALL.key}>{ALL.label}</option>
    {modules.map((m) => (
      <option key={m.key} value={m.key}>
        {m.label}
      </option>
    ))}
  </select>
  <div className="text-xs text-slate-500">
    Tip: Hold Ctrl/Cmd (desktop) to select multiple modules. Selecting “All” overrides individual picks.
  </div>
</div>
            <div className="mt-2 text-xs text-slate-500">Selecting a module starts a new session with only that module’s questions.</div>
          </div>

          <div className="p-4 rounded-2xl shadow bg-white">
            <div className="text-sm text-slate-600 mb-1">Question Count</div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                inputMode="numeric"
                placeholder="all"
                value={desiredCount}
                onChange={(e) => setDesiredCount(e.target.value === "" ? "all" : e.target.value)}
                className="flex-1 rounded-xl border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                onClick={() => buildSession(moduleKeys, desiredCount)}
                className="rounded-xl px-3 py-2 bg-indigo-600 text-white shadow hover:bg-indigo-700 active:scale-[0.98]"
              >
                Restart / Reshuffle
              </button>
            </div>
            <div className="mt-2 text-xs text-slate-500">Enter a number (e.g., 20) or leave as <span className="font-semibold">all</span>.</div>
          </div>
        </div>

        {/* Score & Progress */}
        <div className="p-4 rounded-2xl shadow bg-white flex flex-col gap-2 mb-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm text-slate-600">Question <span className="font-semibold">{Math.min(current + 1, sessionQs.length)}</span> / {sessionQs.length}</div>
            <div className="text-sm text-slate-600">{`Score: ${correct} / ${attempted} attempted (${attempted ? Math.round((correct / attempted) * 100) : 0}%)`}</div>
          </div>
          <div className="w-full h-3 bg-slate-200 rounded-xl overflow-hidden">
            <div className="h-full bg-indigo-500" style={{ width: `${percentAnswered}%` }} />
          </div>
        </div>

        {/* Quiz Card or Summary */}
        {!showSummary ? (
          <div className="rounded-2xl shadow bg-white p-5 md:p-6">
            <div className="text-xs uppercase tracking-wide text-indigo-700 mb-1">{currentQ?.module || ""}</div>
            <div className="text-lg md:text-xl font-semibold text-slate-800 mb-4">{currentQ?.q}</div>

            <div className="grid gap-3">
              {currentQ?.choices.map((c, i) => {
                const chosen = selected[current] === i;
                const isLocked = !!locked[current];
                const isCorrect = isLocked && i === currentQ.a;
                const isWrong = isLocked && chosen && i !== currentQ.a;
                return (
                  <button
                    key={i}
                    disabled={isLocked}
                    onClick={() => setSelected((prev) => ({ ...prev, [current]: i }))}
                    className={[
                      "text-left w-full p-3 rounded-xl border transition shadow-sm",
                      chosen && !isLocked ? "border-indigo-500 ring-2 ring-indigo-300" : "border-slate-300",
                      isCorrect ? "bg-green-50 border-green-400" : "",
                      isWrong ? "bg-rose-50 border-rose-400" : "",
                      !isLocked && !chosen ? "hover:bg-slate-50" : ""
                    ].join(" ")}
                  >
                    <div className="flex items-start gap-2">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-300" />
                      <span className="text-slate-800">{c}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Controls */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={onPrev}
                  className="rounded-xl px-3 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 shadow-sm"
                >
                  Previous
                </button>
                <button
                  onClick={onNext}
                  className="disabled:opacity-50 disabled:cursor-not-allowed rounded-xl px-3 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 shadow-sm"
                 disabled={!locked[current]}>
                  Next
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onSubmit}
                  disabled={locked[current] || selected[current] == null}
                  className="rounded-xl px-4 py-2 bg-indigo-600 text-white shadow hover:bg-indigo-700 disabled:opacity-60"
                >
                  Submit Answer
                </button>
                <button
                  onClick={onFinish}
                  disabled={attempted !== sessionQs.length}
                  className="rounded-xl px-4 py-2 bg-emerald-600 text-white shadow hover:bg-emerald-700 disabled:opacity-60"
                >
                  Finish Quiz
                </button>
              </div>
            </div>

            {/* Feedback / Explanation */}
            {locked[current] && (
              <div className="mt-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
                {selected[current] === currentQ.a ? (
                  <div className="text-emerald-700 font-semibold mb-1">✅ Correct</div>
                ) : (
                  <div className="text-rose-700 font-semibold mb-1">❌ Incorrect</div>
                )}
                <div className="text-slate-700">{currentQ.exp}</div>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-2xl shadow bg-white p-6">
            <div className="text-2xl font-bold text-slate-800 mb-2">Quiz Summary</div>
            <div className="text-slate-700 mb-4">Here’s how you did this session.</div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              <Stat label="Total" value={sessionQs.length} />
              <Stat label="Attempted" value={attempted} />
              <Stat label="Correct" value={correct} onClick={() => { setReviewMode(true); setReviewFilter("single"); setReviewSingleIndex(i); }} />
              <Stat label="Incorrect" value={attempted - correct} onClick={() => { setReviewMode(true); setReviewFilter("single"); setReviewSingleIndex(i); }} />
              <Stat label="Grade (%)" value={sessionQs.length ? Math.round((correct / sessionQs.length) * 100) : 0} />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => { const next = !reviewMode; setReviewMode(next); if (next) { setReviewFilter("all"); setReviewSingleIndex(null);} }}
                className="rounded-xl px-4 py-2 bg-slate-100 border border-slate-300 text-slate-800 hover:bg-slate-200"
              >
                {reviewMode ? "Hide Review" : "Review Questions"}
              </button>
              <button
                onClick={() => { setReviewMode(true); setReviewFilter("single"); setReviewSingleIndex(i); }}
                disabled={sessionQs.filter((q, i) => selected[i] != null && selected[i] !== q.a).length === 0}
                className="rounded-xl px-4 py-2 bg-rose-600 text-white shadow hover:bg-rose-700 disabled:opacity-60"
                title="Show only the questions you missed"
              >
                Review Incorrect Answers
              </button>
              <button
                onClick={onRestart}
                className="rounded-xl px-4 py-2 bg-indigo-600 text-white shadow hover:bg-indigo-700"
              >
                Restart / Reshuffle
              
              </button>
            </div>

            {/* Per-question summary table */}
            <div className="mt-6 overflow-x-auto max-h-[500px] overflow-y-auto rounded-xl">
              <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 sticky top-0 z-10">
                  <tr className="[&>th]:px-3 [&>th]:py-2 [&>th]:text-left [&>th]:text-sm [&>th]:font-semibold text-slate-700">
                    <th>Question</th>
                    <th>Result</th>
                    <th>Time Spent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {sessionQs.map((q, i) => {
                    const wasCorrect = (selected[i] === q.a);
                    const t = timeSpent[i];
                    return (
                      <tr key={i} className="[&>td]:px-3 [&>td]:py-2 text-slate-800">
                        <td><span className="font-medium">Q{i + 1}.</span> {q.q}</td>
                        <td>
                          {wasCorrect ? (
                            <button
                              onClick={() => { setReviewMode(true); setReviewFilter("single"); setReviewSingleIndex(i); }}
                              className="text-emerald-700 font-medium underline decoration-dotted"
                              title="Show only the questions you answered correctly"
                            >
                              Correct
                            </button>
                          ) : (
                            <button
                              onClick={() => { setReviewMode(true); setReviewFilter("single"); setReviewSingleIndex(i); }}
                              className="text-rose-700 font-medium underline decoration-dotted"
                              title="Show only the questions you answered incorrectly"
                            >
                              Incorrect
                            </button>
                          )}
                        </td>
                        <td>{fmtTime(t)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {reviewMode && (
              <div className="grid gap-3">
                {(
                  reviewFilter === "single"
                    ? (reviewSingleIndex != null ? [reviewSingleIndex] : [])
                    : reviewFilter === "incorrect"
                      ? sessionQs.map((_,i)=>i).filter(i => selected[i] != null && selected[i] !== sessionQs[i].a)
                      : reviewFilter === "correct"
                        ? sessionQs.map((_,i)=>i).filter(i => selected[i] === sessionQs[i].a)
                        : sessionQs.map((_,i)=>i)
                ).map((i) => { const q = sessionQs[i];
                  const wasRight = selected[i] === q.a;
                  return (
                    <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                      <div className="text-xs uppercase tracking-wide text-indigo-700 mb-1">{q.module}</div>
                      <div className="font-semibold text-slate-800 mb-2">Q{i + 1}. {q.q}</div>
                      <ul className="list-disc ml-6 text-slate-700 mb-2">
                        {q.choices.map((c, j) => (
                          <li key={j} className={j === q.a ? "font-semibold" : ""}>{c}{j === q.a ? "  ← correct" : ""}</li>
                        ))}
                      </ul>
                      <div className={wasRight ? "text-emerald-700" : "text-rose-700"}>{wasRight ? "You answered this correctly." : "You missed this one."}</div>
                      <div className="text-slate-700 mt-1">Explanation: {q.exp}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        <div className="mt-6 text-center text-xs text-slate-500">
          Built with ❤️ for Phung-Hieu Diep.
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, onClick, className="" }) {
  return (
    <div onClick={onClick} className={`p-4 rounded-xl bg-indigo-50 border border-indigo-100 text-center ${onClick ? "cursor-pointer hover:bg-indigo-100" : ""} ${className}`.trim()}>
      <div className="text-2xl font-bold text-indigo-800">{value}</div>
      <div className="text-xs uppercase tracking-wide text-indigo-700 mt-1">{label}</div>
    </div>
  );
}