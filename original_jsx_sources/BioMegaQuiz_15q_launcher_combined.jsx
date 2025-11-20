// Auto-generated GitHub Pages build for BioMegaQuiz_15q
// Uses React 18 UMD + Babel standalone.
// All quiz modules are bundled into this single script for simple static hosting.


// ===== Component: Exam2_MCQ_Lec05_Lec10_Labs =====

/**
 * BioMegaQuiz — React + Tailwind single-file quiz
 * - 15 questions per module (expanded)
 * - Modules: Plasma Membranes (3 parts), Metabolism (3 parts), Viruses (2 parts)
 * - Mixed mode (All) + module filter, randomization, scoring, review, reshuffle
 */

function Exam2_MCQ_Lec05_Lec10_Labs() {
  /** --------------------------- Question Data --------------------------- **/
  // 15 questions per module (expanded as requested)
  // Module keys match dropdown filter labels.

  const modules = useMemo(() => [



 {
      key: "W5_Part1_Plasma_Membranes",
      label: "W5 L6 Part 1 – Plasma Membranes",
      questions: [
        {
          q: "Which phrase best summarizes the fluid mosaic model of the plasma membrane?",
          choices: [
            "A static, rigid bilayer composed only of phospholipids",
            "A dynamic bilayer of phospholipids with dispersed proteins and carbohydrates",
            "A single layer of triglycerides and nucleic acids",
            "A crystalline array of cholesterol without proteins"
          ],
          a: 1,
          exp: "The fluid mosaic model describes a dynamic phospholipid bilayer containing proteins, cholesterol, and carbohydrates that move laterally."
        },
        {
          q: "Phospholipids are amphipathic because they have…",
          choices: [
            "two hydrophilic fatty acid tails and a hydrophobic head",
            "a hydrophobic glycerol and two hydrophilic tails",
            "hydrophobic fatty acid tails and a hydrophilic phosphate head",
            "no polar regions at all"
          ],
          a: 2,
          exp: "Each phospholipid has nonpolar fatty acid tails (hydrophobic) and a polar phosphate head (hydrophilic)."
        },
        {
          q: "In a phospholipid bilayer, the hydrophobic fatty acid tails face…",
          choices: ["outward toward water", "inward away from water", "only the extracellular fluid", "only the cytosol"],
          a: 1,
          exp: "Hydrophobic tails aggregate in the interior of the membrane, shielding from aqueous environments."
        },
        {
          q: "Which proteins are embedded within the hydrophobic core of the membrane?",
          choices: ["Peripheral proteins", "Integral (transmembrane) proteins", "Cytoskeletal intermediate filaments", "Ribosomal proteins"],
          a: 1,
          exp: "Integral proteins span or are embedded in the bilayer; peripheral proteins associate with surfaces."
        },
        {
          q: "What is a primary role of membrane carbohydrates?",
          choices: [
            "Catalyze ATP hydrolysis",
            "Store genetic information",
            "Cell–cell recognition and adhesion as glycoproteins/glycolipids",
            "Pump ions against gradients"
          ],
          a: 2,
          exp: "Carbohydrates on the outer leaflet form glycoproteins/glycolipids important in recognition and adhesion."
        },
        {
          q: "Cholesterol within the membrane acts mainly to…",
          choices: [
            "block all diffusion across the bilayer",
            "buffer membrane fluidity across temperatures",
            "increase membrane thickness by 10×",
            "replace saturated fatty acids"
          ],
          a: 1,
          exp: "Cholesterol reduces fluidity at high temps and prevents excessive rigidity at low temps — a fluidity buffer."
        },
        {
          q: "Membrane asymmetry means…",
          choices: [
            "both leaflets have identical lipids and proteins",
            "inner and outer leaflets differ in composition and protein orientation",
            "cholesterol appears only on the outer leaflet",
            "carbohydrates are mainly on the cytosolic leaflet"
          ],
          a: 1,
          exp: "Inner and outer leaflets differ; carbohydrates predominantly face the extracellular side."
        },
        {
          q: "T cell CD4 recognizing HIV involves which membrane concept?",
          choices: ["membrane potential", "osmolarity", "receptor–ligand specificity (glycoprotein)", "primary active transport"],
          a: 2,
          exp: "CD4 is a glycoprotein receptor enabling specific recognition — an example of receptor-mediated interaction."
        }
      ]
    },
    {
      key: "W5_Part2_Plasma_Membranes",
      label: "W5 L6 Part 2 – Passive Transport & Tonicity",
      questions: [
        {
          q: "Simple diffusion across membranes primarily allows which molecules to pass?",
          choices: ["large polar molecules like glucose", "small nonpolar molecules like O2 and CO2", "charged ions like Na+", "all proteins"],
          a: 1,
          exp: "Small nonpolar molecules diffuse through the hydrophobic core; polar/charged species need proteins."
        },
        {
          q: "Facilitated diffusion moves substances…",
          choices: [
            "against gradients using ATP",
            "down gradients via channel or carrier proteins",
            "only water molecules via aquaporins",
            "only through gated channels"
          ],
          a: 1,
          exp: "Facilitated diffusion uses integral proteins but remains passive (downhill)."
        },
        {
          q: "Aquaporins are best described as…",
          choices: ["ATP-driven pumps", "enzymes that split water", "water-specific channel proteins", "lipid anchors for glycoproteins"],
          a: 2,
          exp: "Aquaporins are channel proteins that greatly increase water permeability."
        },
        {
          q: "A solution hypertonic to an animal cell will cause the cell to…",
          choices: ["swell and lyse", "remain unchanged", "shrink (crenate) as water leaves", "actively pump in water"],
          a: 2,
          exp: "Water moves toward higher solute concentration; the cell loses water and shrinks."
        },
        {
          q: "Plant cell turgor pressure is maintained in which condition?",
          choices: ["hypertonic surroundings", "hypotonic surroundings", "isotonic surroundings only", "any condition equally"],
          a: 1,
          exp: "Hypotonic extracellular fluid drives water into the cell; the wall prevents lysis, generating turgor."
        },
        {
          q: "Which factor generally speeds up diffusion?",
          choices: ["greater distance to travel", "lower temperature", "higher concentration gradient", "higher solvent density"],
          a: 2,
          exp: "A steeper gradient increases net flux; higher temperature also speeds diffusion."
        },
        {
          q: "In facilitated diffusion, carrier proteins…",
          choices: [
            "are nonspecific for substrates",
            "undergo shape changes and can saturate",
            "always move substrates against gradients",
            "are open channels at all times"
          ],
          a: 1,
          exp: "Carriers bind specific solutes, change conformation, and exhibit transport max (saturation)."
        },
        {
          q: "Osmosis is best defined as…",
          choices: [
            "movement of solute across a membrane",
            "diffusion of water from lower to higher water concentration",
            "active transport of water requiring ATP",
            "bulk flow driven by pressure only"
          ],
          a: 1,
          exp: "Osmosis is passive water movement toward higher solute concentration (lower water concentration)."
        }
      ]
    },
    {
      key: "W5_Part3_Plasma_Membranes",
      label: "W5 L6 Part 3 – Active & Bulk Transport",
      questions: [
        {
          q: "Primary active transport differs from secondary active transport because primary active transport…",
          choices: [
            "uses electrochemical gradients only",
            "uses ATP hydrolysis directly to power pumping",
            "moves solutes down their gradients",
            "does not involve membrane proteins"
          ],
          a: 1,
          exp: "Primary active transport (e.g., Na⁺/K⁺-ATPase) uses ATP directly; secondary uses stored gradient energy."
        },
        {
          q: "The Na⁺/K⁺ pump moves…",
          choices: [
            "3 Na⁺ in and 2 K⁺ out per ATP",
            "2 Na⁺ out and 3 K⁺ in per ATP",
            "3 Na⁺ out and 2 K⁺ in per ATP",
            "1 Na⁺ out and 1 K⁺ in per ATP"
          ],
          a: 2,
          exp: "Na⁺/K⁺-ATPase exports 3 Na⁺ and imports 2 K⁺ per ATP; it is an electrogenic antiporter."
        },
        {
          q: "Symporters and antiporters are examples of…",
          choices: ["channel proteins", "uniport pumps only", "carrier proteins that couple solute movement", "peripheral enzymes"],
          a: 2,
          exp: "They are carrier proteins that move two solutes in the same or opposite directions, often using gradients."
        },
        {
          q: "Secondary active transport typically harnesses energy from…",
          choices: ["ATP directly bound to the carrier", "an existing electrochemical gradient", "GTP hydrolysis only", "membrane carbohydrates"],
          a: 1,
          exp: "A gradient (e.g., H⁺ or Na⁺) built by primary active transport drives uphill movement of another solute."
        },
        {
          q: "Phagocytosis is…",
          choices: ["receptor-mediated uptake of specific ligands only", "cellular ‘drinking’ of fluid droplets", "engulfment of large particles by the membrane", "fusion of vesicles with the membrane to export cargo"],
          a: 2,
          exp: "Phagocytosis (cell eating) internalizes large particles via membrane extensions."
        },
        {
          q: "Receptor-mediated endocytosis requires…",
          choices: ["clathrin and specific receptors to concentrate cargo", "random invagination without receptors", "ATP-independent budding", "gap junctions"],
          a: 0,
          exp: "Ligand binding to receptors triggers coated-pit formation (e.g., LDL uptake); specificity is key."
        },
        {
          q: "Exocytosis…",
          choices: [
            "releases vesicle contents by fusing vesicles with the plasma membrane",
            "imports macromolecules via pits",
            "requires aquaporins",
            "occurs only in neurons"
          ],
          a: 0,
          exp: "Exocytosis exports cargo by vesicle–membrane fusion in many cell types."
        },
        {
          q: "An electrochemical gradient reflects…",
          choices: [
            "only differences in solute concentration",
            "only differences in membrane potential",
            "both concentration and electrical potential differences",
            "temperature differences across the membrane"
          ],
          a: 2,
          exp: "Electrochemical gradients combine chemical (concentration) and electrical driving forces."
        }
      ]
    },
    {
      key: "W6_Part1_Metabolism",
      label: "W6 L7 Part 1 – Metabolism & Free Energy (I)",
      questions: [
        {
          q: "Which pairing is correct?",
          choices: [
            "Catabolic pathways – build complex molecules, require energy",
            "Anabolic pathways – break down molecules, release energy",
            "Catabolic pathways – break down molecules, release energy",
            "Anabolic pathways – always exergonic"
          ],
          a: 2,
          exp: "Catabolism releases energy by breaking down molecules; anabolism builds and generally requires energy."
        },
        {
          q: "Bioenergetics refers to…",
          choices: [
            "the energy flow through living systems",
            "the anatomy of mitochondria only",
            "the genetics of ATP",
            "electrical signaling in neurons only"
          ],
          a: 0,
          exp: "Bioenergetics studies how energy is captured, stored, and transformed in biological systems."
        },
        {
          q: "Which is a correct statement about ∆G?",
          choices: [
            "Exergonic reactions have ∆G > 0",
            "Endergonic reactions have ∆G < 0",
            "Exergonic reactions have ∆G < 0 and can be spontaneous",
            "∆G is unaffected by entropy"
          ],
          a: 2,
          exp: "Exergonic: ∆G < 0; endergonic: ∆G > 0. Spontaneous ≠ fast."
        },
        {
          q: "Which equation expresses Gibbs free energy?",
          choices: ["∆G = ∆H + T∆S", "∆G = ∆H − T∆S", "∆G = T/∆S − ∆H", "∆G = ∆S − T∆H"],
          a: 1,
          exp: "Gibbs free energy change equals change in enthalpy minus temperature times entropy change."
        },
        {
          q: "Which best describes a metabolic pathway?",
          choices: [
            "A single reaction converting substrate to product",
            "A series of enzyme-catalyzed reactions from substrates to a final product",
            "Spontaneous heat release from a system",
            "A non-biological combustion chain"
          ],
          a: 1,
          exp: "Pathways link multiple steps, each catalyzed by specific enzymes."
        },
        {
          q: "Which energy form is potential energy in cells?",
          choices: ["ATP hydrolysis products moving", "ion gradients across membranes", "heat released by reactions", "mechanical motion of cilia"],
          a: 1,
          exp: "Electrochemical gradients store potential energy that can be harnessed for work."
        },
        {
          q: "Photosynthesis is largely…",
          choices: ["catabolic and exergonic overall", "anabolic, storing energy in glucose", "purely kinetic energy conversion", "entropy-increasing with no energy storage"],
          a: 1,
          exp: "Photosynthesis builds glucose using energy from light — an anabolic process."
        },
        {
          q: "Spontaneous reactions are best described as…",
          choices: ["reactions that occur rapidly", "reactions that do not require added energy (∆G<0)", "non-enzymatic reactions only", "always combustion"],
          a: 1,
          exp: "Spontaneous (thermodynamically favorable) does not imply high rate; activation energy may be large."
        }
      ]
    },
    {
      key: "W6_Part2_Metabolism",
      label: "W6 L7 Part 2 – Thermodynamics, ATP, Enzymes (I)",
      questions: [
        {
          q: "The first law of thermodynamics states that…",
          choices: [
            "entropy always decreases in closed systems",
            "energy cannot be created or destroyed",
            "energy conversions are 100% efficient",
            "heat cannot perform any work"
          ],
          a: 1,
          exp: "Energy is conserved; it changes form but total energy remains constant."
        },
        {
          q: "The second law of thermodynamics implies that…",
          choices: [
            "every energy transfer increases the entropy of the universe",
            "living systems violate entropy",
            "cells never lose heat",
            "∆S is always zero"
          ],
          a: 0,
          exp: "Energy transfers are not perfectly efficient; some energy disperses as heat, increasing entropy."
        },
        {
          q: "Activation energy (Eₐ)…",
          choices: [
            "is the energy released by ATP hydrolysis",
            "is the barrier required to achieve the transition state",
            "is zero for all exergonic reactions",
            "is supplied only by enzymes"
          ],
          a: 1,
          exp: "Eₐ is the energetic hurdle to reach the transition state; enzymes lower Eₐ."
        },
        {
          q: "ATP hydrolysis…",
          choices: [
            "is endergonic and requires energy",
            "is exergonic and can drive endergonic processes via coupling",
            "has no role in active transport",
            "is irreversible in cells"
          ],
          a: 1,
          exp: "ATP → ADP + Pi releases free energy and commonly powers cellular work."
        },
        {
          q: "Which is true of enzymes?",
          choices: [
            "They raise activation energy to slow reactions",
            "They change ∆G of reactions",
            "They lower activation energy and speed reactions",
            "They are consumed as reactants"
          ],
          a: 2,
          exp: "Enzymes lower Eₐ without altering ∆G and are not consumed."
        },
        {
          q: "The sodium–potassium pump illustrates…",
          choices: [
            "energy coupling: ATP hydrolysis powers ion transport",
            "facilitated diffusion of ions",
            "secondary active transport using Na⁺ gradient",
            "osmosis of water"
          ],
          a: 0,
          exp: "Na⁺/K⁺-ATPase couples ATP hydrolysis to uphill ion movement."
        },
        {
          q: "Induced fit refers to…",
          choices: [
            "substrates molding to each other without enzymes",
            "a slight conformational change in enzyme active site to optimize catalysis",
            "permanent unfolding of enzymes",
            "lock-and-key model only"
          ],
          a: 1,
          exp: "Enzyme active sites adapt subtly upon binding to maximize catalytic efficiency."
        },
        {
          q: "Ribozymes are…",
          choices: ["lipid catalysts", "RNA molecules with catalytic activity", "DNA enzymes", "cofactors made of metal ions"],
          a: 1,
          exp: "Most enzymes are proteins, but some RNAs (ribozymes) catalyze reactions."
        }
      ]
    },
    {
      key: "W6_Part3_Metabolism",
      label: "W6 L7 Part 3 – Enzymes (II): Regulation",
      questions: [
        {
          q: "Competitive inhibitors…",
          choices: [
            "bind an allosteric site and reduce Vmax",
            "mimic substrate and compete for the active site",
            "increase reaction rate above Vmax",
            "are irreversible only"
          ],
          a: 1,
          exp: "Competitive inhibitors resemble the substrate and occupy the active site; Vmax unchanged, Km increases."
        },
        {
          q: "Noncompetitive inhibitors…",
          choices: [
            "bind active site only",
            "do not change Vmax",
            "bind allosterically and lower Vmax",
            "increase substrate affinity"
          ],
          a: 2,
          exp: "Allosteric binding reduces the fraction of active enzyme, lowering Vmax."
        },
        {
          q: "Allosteric activators generally…",
          choices: ["reduce substrate affinity", "stabilize a conformation with higher activity/affinity", "denature enzymes", "block cofactor binding"],
          a: 1,
          exp: "Allosteric activators shift the enzyme toward a more active state with higher affinity."
        },
        {
          q: "A cofactor is…",
          choices: [
            "an inorganic ion or organic coenzyme required for enzyme activity",
            "a peptide inhibitor",
            "a denatured enzyme",
            "a type of substrate"
          ],
          a: 0,
          exp: "Cofactors include metal ions; coenzymes include organic molecules like vitamins, NAD⁺, ATP."
        },
        {
          q: "Feedback inhibition in metabolic pathways…",
          choices: [
            "speeds up the first step when product is high",
            "uses the end product to inhibit an upstream enzyme",
            "is impossible in anabolic pathways",
            "requires membrane transport"
          ],
          a: 1,
          exp: "End-product acts as an allosteric inhibitor, preventing unnecessary accumulation."
        },
        {
          q: "Suboptimal temperature typically…",
          choices: [
            "increases enzyme activity indefinitely",
            "has no effect on protein structure",
            "can denature enzymes or reduce activity",
            "increases binding of all substrates"
          ],
          a: 2,
          exp: "Temperature extremes can disrupt folding; moderate deviations often reduce rates."
        },
        {
          q: "Enzyme compartmentalization means…",
            choices: [
              "enzymes are randomly dispersed",
              "cells localize enzymes in organelles/regions to improve efficiency",
              "enzymes only exist in the cytosol",
              "no functional significance"
            ],
          a: 1,
          exp: "Localization (e.g., lysosomal hydrolases) supports pathway efficiency and control."
        },
        {
          q: "Which statement about cofactors is accurate?",
          choices: [
            "DNA polymerase doesn’t require any cofactors",
            "Metal ions (e.g., Zn²⁺, Mg²⁺) or vitamins can be essential for catalysis",
            "All enzymes require the same cofactor",
            "Cofactors are always proteins"
          ],
          a: 1,
          exp: "Many enzymes require specific metal ions or vitamin-derived coenzymes for function."
        }
      ]
    },
    {
      key: "W6_Part1_Viruses",
      label: "W6 L8 Part 1 – Viruses (Basics & Morphology)",
      questions: [
        {
          q: "Viruses are considered acellular because…",
          choices: [
            "they have complete metabolism",
            "they replicate independently of host cells",
            "they lack metabolism and require host machinery to replicate",
            "they contain both DNA and RNA simultaneously"
          ],
          a: 2,
          exp: "Viruses lack autonomous metabolism/growth and depend on host cells to reproduce."
        },
        {
          q: "A virion typically contains…",
          choices: [
            "DNA and RNA together in one capsid",
            "a protein capsid and either DNA or RNA genome",
            "ribosomes and mitochondria",
            "a peptidoglycan wall"
          ],
          a: 1,
          exp: "Virions have a nucleic acid genome (DNA or RNA) enclosed by a protein capsid, sometimes an envelope."
        },
        {
          q: "Which is true of enveloped viruses?",
          choices: [
            "their envelope is derived from host membranes and contains viral glycoproteins",
            "they are always more stable outside the body than naked viruses",
            "they cannot cause persistent infections",
            "they lack surface proteins"
          ],
          a: 0,
          exp: "Envelopes bud from host membranes and carry viral spikes; envelopes tend to be fragile outside the body."
        },
        {
          q: "Bacteriophage T4 infects…",
          choices: ["human epithelial cells", "plant cells", "Escherichia coli bacteria", "yeast cells"],
          a: 2,
          exp: "T4 is a DNA bacteriophage whose host is E. coli."
        },
        {
          q: "Which pairing is correct?",
          choices: [
            "Adenovirus – enveloped",
            "HIV – retrovirus with envelope, targets CD4",
            "Poliovirus – enveloped",
            "Hepatitis A virus – enveloped"
          ],
          a: 1,
          exp: "HIV is an enveloped retrovirus; adenovirus and polio are non-enveloped; HAV is also non-enveloped."
        },
        {
          q: "The viral envelope’s glycoprotein spikes primarily function in…",
          choices: ["energy production", "host cell recognition and attachment", "protein synthesis", "genome replication"],
          a: 1,
          exp: "Spikes mediate receptor binding and entry specificity."
        },
        {
          q: "Which statement about viral genomes is accurate?",
          choices: [
            "they are always double-stranded DNA",
            "they can be DNA or RNA, single- or double-stranded, segmented or not",
            "they always contain >1,000 genes",
            "they must be circular"
          ],
          a: 1,
          exp: "Viral genomes are diverse in chemistry and structure."
        },
        {
          q: "Why are enveloped virions generally more fragile outside hosts?",
          choices: [
            "protein capsids are heat-sensitive",
            "lipid envelopes are sensitive to desiccation, solvents, and detergents",
            "RNA always degrades instantly",
            "they are heavier"
          ],
          a: 1,
          exp: "Lipid bilayers are disrupted by drying, solvents, and detergents, inactivating the virus."
        }
      ]
    },
    {
      key: "W6_Part2_Viruses",
      label: "W6 L8 Part 2 – Virus Infections, Vaccines, Prions/Viroids",
      questions: [
        {
          q: "Virus attachment is specific because…",
          choices: [
            "capsids bind any cell surface",
            "viral proteins recognize particular host receptors",
            "viruses actively search for cells",
            "entry always occurs by fusion"
          ],
          a: 1,
          exp: "Attachment requires receptor–ligand compatibility, restricting species/tissue tropism."
        },
        {
          q: "Which is a typical egress mechanism?",
          choices: ["exocytosis only", "lysosomal secretion", "lysis or budding", "endocytosis"],
          a: 2,
          exp: "Viruses often exit by lysing the cell or budding from membranes (enveloped)."
        },
        {
          q: "HIV is a retrovirus because…",
          choices: [
            "it uses reverse transcriptase to convert RNA to DNA and integrates as a provirus",
            "it has a DNA genome",
            "it lyses cells immediately",
            "it lacks an envelope"
          ],
          a: 0,
          exp: "Reverse transcription and genome integration are hallmarks of retroviruses."
        },
        {
          q: "Vaccines protect primarily by…",
          choices: [
            "directly killing invading viruses",
            "triggering immune memory to prevent or blunt infection",
            "neutralizing all toxins immediately",
            "increasing body temperature"
          ],
          a: 1,
          exp: "Vaccination establishes adaptive immune responses for faster, stronger protection."
        },
        {
          q: "Prions are unusual pathogens because they…",
          choices: [
            "are RNA-only particles",
            "are misfolded proteins lacking nucleic acids",
            "replicate in plants only",
            "are easily inactivated by cooking"
          ],
          a: 1,
          exp: "Prions are proteinaceous infectious particles (no DNA/RNA) that induce misfolding."
        },
        {
          q: "Viroids…",
          choices: [
            "infect animals and encode proteins",
            "are small circular RNAs that infect plants and do not encode proteins",
            "are DNA fragments in bacteria",
            "are protein toxins"
          ],
          a: 1,
          exp: "Viroids are tiny noncoding RNAs that interfere with plant gene expression."
        },
        {
          q: "Which step distinguishes entry for many enveloped animal viruses?",
          choices: [
            "fusion of the viral envelope with host membrane",
            "injection of DNA through the cell wall",
            "direct nuclear import of capsid at the surface",
            "passage through plasmodesmata"
          ],
          a: 0,
          exp: "Enveloped viruses often fuse their membrane with the host plasma membrane or endosomal membrane."
        },
        {
          q: "Which is a common cytopathic effect?",
          choices: ["enhanced mitosis", "apoptosis, lysis, or syncytia formation", "cell wall thickening", "chloroplast loss"],
          a: 1,
          exp: "Viral replication can trigger apoptosis, lysis, and other damaging changes."
        }
      ]
    },
{
  key: "W7_Ch8_Part1_Photosynthesis",
  label: "W7 Lecture10 Ch8 Slides Part 1 – Photosynthesis",
  questions: [
    {
      q: "Which statement best distinguishes photoautotrophs from chemoautotrophs?",
      choices: ["Photoautotrophs use sunlight to make food, chemoautotrophs use energy from inorganic compounds.", "Photoautotrophs require animals as carbon sources, chemoautotrophs require fungi.", "Both obtain energy only from glucose.", "Chemoautotrophs use sunlight; photoautotrophs oxidize minerals."],
      a: 0,
      exp: "Photoautotrophs (plants, algae, cyanobacteria) capture solar energy; chemoautotrophs oxidize inorganic compounds."
    },
    {
      q: "Heterotrophs obtain energy by…",
      choices: ["fixing CO₂ using RuBisCO", "consuming organic molecules produced by autotrophs", "splitting water to release O₂", "converting light directly to ATP without pigments"],
      a: 1,
      exp: "Heterotrophs rely on sugars made by autotrophs for energy needs."
    },
    {
      q: "During photosynthesis, which molecule exits leaves through stomata as a waste product?",
      choices: ["CO₂", "H₂O", "O₂", "Glucose"],
      a: 2,
      exp: "Oxygen produced by splitting water diffuses out via stomata."
    },
    {
      q: "Closing stomata on a hot, dry day primarily…",
      choices: ["increases CO₂ uptake and speeds photosynthesis", "reduces water loss but also limits CO₂ entry, slowing photosynthesis", "has no effect on photosynthesis", "causes chloroplasts to move into the epidermis"],
      a: 1,
      exp: "Guard cells close stomata to conserve water, limiting CO₂ and thus photosynthetic rate."
    },
    {
      q: "Which leaf tissue has the highest chloroplast density in typical C₃ leaves?",
      choices: ["Epidermis", "Guard cells only", "Mesophyll", "Phloem"],
      a: 2,
      exp: "Mesophyll (middle leaf) cells carry many chloroplasts."
    },
    {
      q: "Match process to location: Light reactions occur in ____; Calvin cycle occurs in ____.",
      choices: ["stroma; thylakoid membrane", "thylakoid membrane; stroma", "inner membrane; lumen", "cytosol; outer membrane"],
      a: 1,
      exp: "Light reactions are on thylakoid membranes; Calvin cycle is in the stroma."
    },
    {
      q: "Which is TRUE of the visible spectrum and photon energy?",
      choices: ["Longer wavelengths (red) carry more energy than shorter (violet).", "Shorter wavelengths (violet) carry more energy than longer (red).", "All visible photons carry equal energy.", "Energy depends only on intensity, not wavelength."],
      a: 1,
      exp: "Photon energy is inversely proportional to wavelength."
    },
    {
      q: "Why do leaves appear green?",
      choices: ["Chlorophylls reflect/transmit green light while absorbing blue and red.", "Carotenoids reflect blue light only.", "Chlorophylls absorb only green light.", "Stomata fluoresce green."],
      a: 0,
      exp: "Chlorophyll a and b absorb strongly in blue/red; green is reflected/transmitted."
    },
    {
      q: "Which list correctly names chloroplast substructures?",
      choices: ["Grana (stacks of thylakoids), thylakoid lumen, stroma", "Cristea, nucleoid, vacuole", "Matrix, cristae, outer space", "Capsid, envelope, core"],
      a: 0,
      exp: "Chloroplasts have thylakoids stacked as grana with an internal lumen, all in the stroma."
    },
    {
      q: "The overall function of the light reactions is to…",
      choices: ["fix CO₂ into G3P", "produce ATP and NADPH", "generate glucose directly", "reduce O₂ to H₂O"],
      a: 1,
      exp: "Light reactions convert light to chemical energy stored in ATP and NADPH."
    },
    {
      q: "The Calvin–Benson cycle directly uses which inputs from light reactions?",
      choices: ["ATP and NADPH", "ATP and FADH₂", "NADH and GTP", "O₂ and H₂O"],
      a: 0,
      exp: "ATP and NADPH power reduction and regeneration steps."
    },
    {
      q: "Visible light spans approximately…",
      choices: ["700–400 nm", "7–4 nm", "700–400 μm", "70–4 nm"],
      a: 0,
      exp: "In biology courses, the visible range is typically ~700–400 nanometers."
    },
    {
      q: "β‑carotene’s protective role in thylakoids is to…",
      choices: ["split water", "dissipate excess energy (photoprotection)", "bind CO₂", "carry electrons to PSI"],
      a: 1,
      exp: "Carotenoids such as β‑carotene dissipate excess energy and protect photosystems."
    },
    {
      q: "Which statement about pigments is correct?",
      choices: ["Each pigment has a unique absorption spectrum.", "All pigments absorb the same wavelengths.", "Pigments are unnecessary in photosynthesis.", "Pigments absorb only green light."],
      a: 0,
      exp: "Pigments differ in the wavelengths they absorb most strongly."
    },
    {
      q: "Which component list belongs to a photosynthesizing plant cell only?",
      choices: ["Chloroplast with thylakoids and stroma", "Capsid and envelope", "Nucleoid and plasmid", "Centrioles only"],
      a: 0,
      exp: "Chloroplast structure is specific to photosynthesizing plant/algal cells."
    },
  ]
}
,
{
  key: "W7_Ch8_Part2_Photosynthesis",
  label: "W7 Lecture10 Ch8 Slides Part 2 – Photosynthesis",
  questions: [
    {
      q: "Electrons lost from the PSII reaction center are replaced by electrons from…",
      choices: ["NADPH", "splitting of water (photolysis)", "ferredoxin", "plastoquinone"],
      a: 1,
      exp: "Water is oxidized at PSII; O₂ is released."
    },
    {
      q: "Correct electron flow from PSII to PSI is…",
      choices: ["Pq → cytochrome complex → Pc", "Pc → Pq → cytochrome complex", "Fd → NADP⁺ reductase → Pc", "cytochrome complex → Pc → Pq"],
      a: 0,
      exp: "Plastoquinone (Pq) → cytochrome complex → plastocyanin (Pc) → PSI."
    },
    {
      q: "Where is the proton (H⁺) gradient highest during the light reactions?",
      choices: ["stroma", "thylakoid lumen", "intermembrane space", "cytosol"],
      a: 1,
      exp: "Electron transport pumps H⁺ into the thylakoid lumen."
    },
    {
      q: "ATP synthase in chloroplasts produces ATP when protons flow…",
      choices: ["from stroma to lumen through ATP synthase", "from lumen to stroma through ATP synthase", "across the outer membrane", "through PSI to NADPH"],
      a: 1,
      exp: "Chemiosmosis: H⁺ flows back into the stroma via ATP synthase."
    },
    {
      q: "Which is the final electron acceptor in the light reactions?",
      choices: ["O₂", "NADP⁺ (forming NADPH)", "FAD", "cytochrome b₆f"],
      a: 1,
      exp: "Electrons reduce NADP⁺ to NADPH via ferredoxin‑NADP⁺ reductase."
    },
    {
      q: "Calvin cycle phases occur in which order?",
      choices: ["regeneration → reduction → fixation", "fixation → reduction → regeneration", "reduction → fixation → regeneration", "reduction only"],
      a: 1,
      exp: "Fixation (RuBisCO + CO₂), reduction (to G3P), regeneration (of RuBP)."
    },
    {
      q: "Three turns of the Calvin cycle (using 3 CO₂) net…",
      choices: ["one G3P", "one glucose", "two glucose", "three glucose"],
      a: 0,
      exp: "Two G3P are needed to make one glucose; three turns net one G3P."
    },
    {
      q: "Photorespiration occurs when RuBisCO acts as an…",
      choices: ["oxygenase, fixing O₂ instead of CO₂", "ATP synthase", "isomerase only", "dehydrogenase"],
      a: 0,
      exp: "O₂ fixation wastes energy and releases CO₂ without sugar production."
    },
    {
      q: "C₄ vs. CAM: the key difference is…",
      choices: ["energy source used", "spatial (C₄) vs temporal (CAM) separation of initial CO₂ fixation", "presence of PSI only", "absence of RuBisCO"],
      a: 1,
      exp: "C₄ separates steps by cell type; CAM separates by time (night/day)."
    },
    {
      q: "In C₃ plants, the first stable product of CO₂ fixation is…",
      choices: ["G3P", "oxaloacetate (OAA)", "3‑phosphoglycerate (3‑PGA)", "pyruvate"],
      a: 2,
      exp: "RuBisCO + CO₂ + RuBP → two molecules of 3‑PGA."
    },
    {
      q: "Plastoquinone (Pq) functions as…",
      choices: ["a mobile electron carrier within the thylakoid membrane", "a water‑splitting enzyme", "a CO₂ acceptor", "a proton channel"],
      a: 0,
      exp: "Pq shuttles electrons (and protons) between PSII and cytochrome complex."
    },
    {
      q: "Plastocyanin (Pc) is…",
      choices: ["a copper‑containing electron carrier in the thylakoid lumen that delivers electrons to PSI", "a proton pump", "a carotenoid", "a Calvin‑cycle enzyme"],
      a: 0,
      exp: "Pc carries electrons from cytochrome complex to PSI."
    },
    {
      q: "Ferredoxin (Fd) feeds electrons to…",
      choices: ["ATP synthase", "RuBisCO", "NADP⁺ reductase", "PSII"],
      a: 2,
      exp: "Ferredoxin‑NADP⁺ reductase reduces NADP⁺ to NADPH."
    },
    {
      q: "The ATP and NADPH needed for the Calvin cycle are generated in the…",
      choices: ["cytosol", "mitochondrial matrix", "stroma (by the light reactions)", "thylakoid lumen"],
      a: 2,
      exp: "Products of light reactions accumulate on the stromal side."
    },
    {
      q: "Chemiosmosis in chloroplasts and mitochondria both…",
      choices: ["pump H⁺ into the stroma/matrix and have H⁺ exit to lumen/IMS", "use an electrochemical gradient of H⁺ to drive ATP synthase", "reduce NADH to NAD⁺", "occur on the outer membrane"],
      a: 1,
      exp: "Both use H⁺ gradients across internal membranes to power ATP synthase."
    },
  ]
}
,
{
  key: "W8_Ch14_Part1_DNA",
  label: "W8 Lecture11 Ch14 Part 1 – DNA Structure & Function",
  questions: [
    {
      q: "Miescher’s ‘nuclein’ was…",
      choices: ["a protein‑lipid complex lacking phosphorus", "a phosphate‑rich acidic substance later known as DNA", "pure RNA", "a glycoprotein from membranes"],
      a: 1,
      exp: "He isolated a phosphorus‑rich acidic substance from nuclei, later called DNA."
    },
    {
      q: "Griffith’s experiments showed…",
      choices: ["proteins are the genetic material", "a heritable factor from heat‑killed S cells transformed R cells", "only live S cells cause death; mixtures are harmless", "RNA is the transforming principle"],
      a: 1,
      exp: "A factor transferred virulence from dead S to live R bacteria."
    },
    {
      q: "Avery, MacLeod, and McCarty identified DNA as the transforming principle because…",
      choices: ["protease eliminated transformation", "RNase eliminated transformation", "DNase eliminated transformation", "lipase eliminated transformation"],
      a: 2,
      exp: "Only DNase abolished transformation in their extracts."
    },
    {
      q: "In Hershey–Chase, which label entered the bacteria?",
      choices: ["³⁵S (protein)", "³²P (DNA)", "¹⁴C (lipid)", "³H (RNA)"],
      a: 1,
      exp: "³²P‑labeled DNA entered the cells; ³⁵S protein remained with coats."
    },
    {
      q: "Chargaff’s rules state…",
      choices: ["%A ≈ %G; %T ≈ %C", "%A ≈ %T; %G ≈ %C", "%A+%T = %C+%G in all species", "purines never equal pyrimidines"],
      a: 1,
      exp: "Complementary base pairing gives A≈T and G≈C, though overall GC% varies."
    },
    {
      q: "A nucleotide consists of…",
      choices: ["sugar + phosphate only", "base + sugar + phosphate", "base + phosphate only", "base only"],
      a: 1,
      exp: "Nucleotides = base + pentose sugar + phosphate."
    },
    {
      q: "DNA strands are…",
      choices: ["parallel and identical polarity", "antiparallel with specific base pairing", "triple helical in cells", "not directional"],
      a: 1,
      exp: "The two strands run antiparallel with A–T (2 H‑bonds) and G–C (3 H‑bonds)."
    },
    {
      q: "Major and minor grooves are important because…",
      choices: ["they prevent protein binding", "they give proteins access to base sequences for regulation", "they hold ribosomes", "they store ATP"],
      a: 1,
      exp: "DNA‑binding proteins read sequence information in the grooves."
    },
    {
      q: "Sanger sequencing works because ddNTPs…",
      choices: ["speed polymerase processivity", "lack a 3′‑OH and terminate extension", "are fluorescent amino acids", "cut DNA at specific sites"],
      a: 1,
      exp: "Chain‑terminating ddNTPs halt extension; fragments are read by size."
    },
    {
      q: "Gel electrophoresis separates DNA primarily by…",
      choices: ["charge sign", "base composition", "size (length)", "GC content only"],
      a: 2,
      exp: "DNA fragments migrate by size through agarose under an electric field."
    },
    {
      q: "Which is TRUE of Rosalind Franklin’s contribution?",
      choices: ["She discovered RNA polymerase.", "Her X‑ray diffraction images helped reveal the helical DNA structure.", "She invented ddNTPs.", "She first sequenced a genome."],
      a: 1,
      exp: "Franklin’s diffraction data supported a helical, repeating structure."
    },
    {
      q: "Which pairing of base bonds is correct?",
      choices: ["A–T forms 3 H‑bonds; G–C forms 2", "A–T forms 2 H‑bonds; G–C forms 3", "A–T and G–C both form 2", "A–T forms 1; G–C forms 4"],
      a: 1,
      exp: "A–T has two; G–C has three hydrogen bonds."
    },
    {
      q: "Phosphodiester bonds connect…",
      choices: ["bases across strands", "sugar‑phosphate backbone within a strand", "proteins to DNA", "adjacent bases via H‑bonds"],
      a: 1,
      exp: "The backbone within each strand is sugar‑phosphate linked by phosphodiester bonds."
    },
    {
      q: "In cells, DNA is primarily…",
      choices: ["single‑stranded and circular", "double‑stranded with complementary pairing", "RNA–DNA hybrid only", "protein‑coated with no bases exposed"],
      a: 1,
      exp: "Cellular DNA is double‑stranded with complementary bases."
    },
    {
      q: "During transcription (definition reminder), the cell…",
      choices: ["copies RNA from DNA", "replicates DNA into DNA", "translates mRNA into protein", "repairs UV damage"],
      a: 0,
      exp: "Transcription is the synthesis of RNA using a DNA template."
    },
  ]
}
,
{
  key: "W8_Ch14_Part2_DNA",
  label: "W8 Lecture11 Ch14 Part 2 – DNA Packaging & Replication",
  questions: [
    {
      q: "In eukaryotes, DNA is packaged with histones into…",
      choices: ["nucleosomes and higher‑order chromatin", "peptidoglycan", "capsids", "sporopollenin"],
      a: 0,
      exp: "DNA wraps around histone octamers to form nucleosomes; further coiling compacts chromosomes."
    },
    {
      q: "Heterochromatin vs euchromatin: which is TRUE?",
      choices: ["heterochromatin is tightly packed and genes are generally not expressed", "euchromatin is tightly packed and never expressed", "both are equally expressed", "terms refer to mitochondrial DNA only"],
      a: 0,
      exp: "Heterochromatin is condensed/inactive; euchromatin is more open/active."
    },
    {
      q: "Prokaryotic vs eukaryotic gene expression:",
      choices: ["both transcription and translation occur together only in eukaryotes", "in prokaryotes they can be coupled spatially and temporally", "in eukaryotes they occur in the cytosol together", "neither has ribosomes"],
      a: 1,
      exp: "In prokaryotes, transcription/translation can be simultaneous; eukaryotes separate them by the nucleus."
    },
    {
      q: "Which replication model did Meselson–Stahl support?",
      choices: ["conservative", "semi‑conservative", "dispersive", "rolling‑circle only"],
      a: 1,
      exp: "Density‑shift experiments supported semi‑conservative replication."
    },
    {
      q: "Topoisomerase in replication…",
      choices: ["unwinds DNA at the fork (helicase role)", "relieves supercoiling ahead of the fork", "lays down RNA primers", "ligates Okazaki fragments"],
      a: 1,
      exp: "Topoisomerase prevents overwinding as helicase opens the helix."
    },
    {
      q: "Single‑strand binding proteins (SSB)…",
      choices: ["remove RNA primers", "prevent re‑annealing of separated strands", "add telomere repeats", "cut damaged bases"],
      a: 1,
      exp: "SSB stabilize unwound DNA until replication proceeds."
    },
    {
      q: "Primase…",
      choices: ["adds DNA nucleotides to fill gaps", "synthesizes short RNA primers", "seals nicks", "removes positive supercoils only"],
      a: 1,
      exp: "Primase lays down RNA primers for DNA polymerases to extend."
    },
    {
      q: "DNA polymerase III (prokaryote) primarily…",
      choices: ["extends the leading/lagging strands from RNA primers", "removes primers", "seals nicks", "adds telomeres"],
      a: 0,
      exp: "Pol III performs bulk DNA synthesis."
    },
    {
      q: "DNA polymerase I (prokaryote) primarily…",
      choices: ["creates the gradient for ATP synthase", "replaces RNA primers with DNA", "supercoils DNA", "transcribes rRNA"],
      a: 1,
      exp: "Pol I removes RNA primers and fills with DNA."
    },
    {
      q: "DNA ligase…",
      choices: ["joins Okazaki fragments by sealing phosphodiester bonds", "unwinds the helix", "adds ribonucleotides", "translocates ribosomes"],
      a: 0,
      exp: "Ligase seals nicks to create continuous DNA."
    },
    {
      q: "Okazaki fragments are characteristic of the…",
      choices: ["leading strand", "lagging strand", "RNA strand", "telomeres only"],
      a: 1,
      exp: "The lagging strand is synthesized discontinuously."
    },
    {
      q: "Compared with eukaryotes, prokaryotic chromosomes usually have…",
      choices: ["multiple origins per chromosome", "a single origin on a circular chromosome", "no helicase requirement", "linear telomeres"],
      a: 1,
      exp: "Typical bacteria have one circular chromosome with one ori."
    },
    {
      q: "A replication fork forms when…",
      choices: ["RNA polymerase binds a promoter", "helicase separates strands at the origin", "ligase cuts DNA", "telomerase extends ends"],
      a: 1,
      exp: "Helicase opens the helix at ori, creating forks."
    },
    {
      q: "Eukaryotic DNA replication uses…",
      choices: ["fewer origins than bacteria", "many origins to speed replication of large linear chromosomes", "only one origin per chromosome", "rolling‑circle exclusively"],
      a: 1,
      exp: "Multiple origins ensure timely duplication of long chromosomes."
    },
    {
      q: "Ultracentrifugation in CsCl in Meselson–Stahl revealed after one generation…",
      choices: ["only heavy DNA", "only light DNA", "intermediate density DNA", "no DNA"],
      a: 2,
      exp: "A hybrid (intermediate) band indicated semi‑conservative replication."
    },
  ]
}
,
{
  key: "W8_Ch14_Part3_DNA",
  label: "W8 Lecture11 Ch14 Part 3 – Telomeres & DNA Repair",
  questions: [
    {
      q: "Why does the end‑replication problem cause telomere shortening?",
      choices: ["helicase removes terminal nucleotides", "there is no template to replace the final 5′ RNA primer on the lagging strand", "leading strand stops early", "ligase skips the last nick"],
      a: 1,
      exp: "After primer removal at the extreme 5′ end, DNA cannot be filled in; the end shortens."
    },
    {
      q: "Human telomeres are composed of repeats of…",
      choices: ["AUGGGU", "TTAGGG", "CCCTAA only once", "poly‑A tails"],
      a: 1,
      exp: "Humans have many TTAGGG repeats at chromosome ends."
    },
    {
      q: "Telomerase is best described as…",
      choices: ["a DNA‑only polymerase", "a ribonucleoprotein that uses its RNA template to extend 3′ ends", "a helicase", "a ligase"],
      a: 1,
      exp: "Telomerase carries an RNA template to add repeats to 3′ ends."
    },
    {
      q: "Most human somatic cells have…",
      choices: ["high telomerase activity and unlimited division", "little to no telomerase; telomeres shorten with age", "no telomeres", "linear chromosomes that lengthen each division without enzymes"],
      a: 1,
      exp: "Limited telomerase leads to progressive shortening and replicative limits."
    },
    {
      q: "Cancer cells commonly…",
      choices: ["inactivate telomerase completely", "reactivate telomerase or alternative lengthening pathways", "lose all telomeres and die immediately", "switch to circular chromosomes"],
      a: 1,
      exp: "Many cancers upregulate telomerase to maintain telomeres."
    },
    {
      q: "DNA polymerase proofreading refers to…",
      choices: ["5′→3′ exonuclease removal of bases", "3′→5′ exonuclease removal of misincorporated bases", "RNA primer removal", "thymine dimer excision"],
      a: 1,
      exp: "Replicative polymerases can backtrack and excise mispairs via 3′→5′ exonuclease activity."
    },
    {
      q: "Mismatch repair (MMR) primarily fixes…",
      choices: ["UV‑induced thymine dimers", "mispaired bases that escaped proofreading", "double‑strand breaks", "depurination only"],
      a: 1,
      exp: "MMR scans for mismatches shortly after replication and corrects them."
    },
    {
      q: "Nucleotide excision repair (NER) is critical for removing…",
      choices: ["uracil from DNA after deamination", "bulky lesions like UV‑induced thymine dimers", "alkylated bases only", "Okazaki fragments"],
      a: 1,
      exp: "NER excises a short oligonucleotide containing the lesion and refills the gap."
    },
    {
      q: "In NER, after the damaged strand segment is removed…",
      choices: ["RNA polymerase inserts ribonucleotides", "DNA polymerase fills the gap and ligase seals it", "helicase deletes the other strand", "nothing further occurs"],
      a: 1,
      exp: "DNA pol fills using the intact strand as template, and ligase seals the nick."
    },
    {
      q: "Which statement about telomere biology is TRUE?",
      choices: ["telomeres code for essential proteins", "their repeats primarily protect coding DNA from erosion", "they are transcribed as tRNAs", "they are centromeres"],
      a: 1,
      exp: "Telomeres buffer the ends so coding regions are preserved."
    },
    {
      q: "Elizabeth Blackburn’s work clarified…",
      choices: ["mechanism of telomerase action on chromosome ends", "ribosome structure", "DNA ligase function", "Okazaki fragment discovery"],
      a: 0,
      exp: "Blackburn (with Greider & Szostak) elucidated telomerase and telomere maintenance."
    },
    {
      q: "A hallmark of defective NER in humans is…",
      choices: ["xeroderma pigmentosum sensitivity to UV", "sickle‑cell disease", "Down syndrome", "color blindness"],
      a: 0,
      exp: "Defective NER causes extreme UV sensitivity (e.g., xeroderma pigmentosum)."
    },
    {
      q: "Proofreading, MMR, and NER act at different times. Which is earliest?",
      choices: ["NER during S phase", "MMR immediately after replication", "Proofreading during polymerization", "All occur before replication"],
      a: 2,
      exp: "Proofreading happens as polymerase incorporates nucleotides; MMR follows; NER can act anytime."
    },
    {
      q: "Which best explains why telomerase extends the 3′ end first?",
      choices: ["polymerases only extend 5′ ends", "the enzyme uses a built‑in RNA template to add DNA to the free 3′‑OH", "ligase requires a 3′ overhang", "Okazaki fragments form only at ends"],
      a: 1,
      exp: "Telomerase is a reverse transcriptase that adds DNA onto the existing 3′ end."
    },
    {
      q: "After telomerase extends the 3′ overhang, how is the complementary strand completed?",
      choices: ["RNA polymerase fills it directly", "DNA polymerase synthesizes complementary DNA using a primer, then ligase seals", "no complementary strand is needed", "helicase anneals the strands"],
      a: 1,
      exp: "Extension creates template for conventional DNA polymerase and ligase to finish the end."
    },
  ]
},
    {
      key: "W6_W8_Labs_Combined",
      label: "W6–W8 Labs – Genetics→Photosynthesis (40)",
      questions: [
        {
          q: "In Wisconsin Fast Plants, which genotype produces the non‑purple (bright green) stem phenotype?",
          choices: ["ANL/ANL", "ANL/anl", "anl/anl", "ANL/ANL with high light"],
          a: 2,
          exp: "The recessive homozygous genotype anl/anl suppresses anthocyanin pigment, yielding green stems."
        },
        {
          q: "What is the wild‑type genotype for the anthocyanin (purple stem) gene in Wisconsin Fast Plants?",
          choices: ["anl/anl", "ANL/ANL", "ANL/anl", "anl/ANL with high light"],
          a: 1,
          exp: "Wild type is ANL/ANL; any ANL allele expresses purple to varying levels."
        },
        {
          q: "Cross anl/anl (non‑purple) × ANL/anl (heterozygous). What phenotypic ratio is expected in the offspring?",
          choices: ["100% purple", "3 purple : 1 green", "1 purple : 1 green", "100% green"],
          a: 2,
          exp: "A testcross with a recessive gives 1:1 if the other parent is heterozygous."
        },
        {
          q: "The yellow‑green leaf phenotype (ygr/ygr) is best observed when plants are grown:",
          choices: ["on petri dishes only", "in soil", "in darkness", "under red light only"],
          a: 1,
          exp: "Leaf color differences are visible in soil‑grown plants; petri‑dish seedlings obscure the phenotype."
        },
        {
          q: "In a dihybrid cross ANL/ANL YGR/YGR × anl/anl ygr/ygr, the F1 genotype for both loci is:",
          choices: ["ANL/ANL YGR/YGR", "ANL/anl YGR/ygr", "anl/anl ygr/ygr", "ANL/ANL ygr/ygr"],
          a: 1,
          exp: "Each F1 receives one dominant and one recessive allele per locus: ANL/anl and YGR/ygr."
        },
        {
          q: "The rosette (short) phenotype in Wisconsin Fast Plants is caused by which genotype at the ros locus?",
          choices: ["ROS/ROS", "ROS/ros", "ros/ros", "Any genotype under low light"],
          a: 2,
          exp: "The recessive homozygote ros/ros produces the rosette form; ROS allele confers standard height."
        },
        {
          q: "In an F2 from two heterozygous parents (ANL/anl), what fraction is expected to be green‑stem (non‑purple)?",
          choices: ["1/2", "1/4", "3/4", "0"],
          a: 1,
          exp: "Classic monohybrid 3:1 ratio; recessive phenotype appears at 1/4 frequency."
        },
        {
          q: "Absorbance (A) is related to transmittance (T) by A = log10(1/T). What is A when %T = 10%?",
          choices: ["0.1", "1.0", "2.0", "10.0"],
          a: 1,
          exp: "T=0.10 → A=log10(1/0.10)=log10(10)=1.0."
        },
        {
          q: "The cuvette should be inserted so that the light passes through which part of the cuvette?",
          choices: ["Any side; it doesn’t matter", "Frosted/ribbed side", "Clear optical windows", "Label side"],
          a: 2,
          exp: "Only the clear optical faces should face the light path to avoid scattering."
        },
        {
          q: "A proper blank contains:",
          choices: ["Pure solvent only", "All components except the analyte", "Distilled water regardless of sample", "Air (empty cuvette)"],
          a: 1,
          exp: "The blank matches the matrix without the absorbing species to zero background absorbance."
        },
        {
          q: "Which dye has a peak absorbance near 428 nm in the FD&C table?",
          choices: ["Blue #1", "Yellow #5 (Tartrazine)", "Red #40", "Blue #2"],
          a: 1,
          exp: "Tartrazine (Yellow #5) peaks at ~428 nm."
        },
        {
          q: "As concentration increases, how do absorbance and % transmittance change?",
          choices: ["A↓, %T↑", "A↑, %T↓", "A↑, %T↑", "No consistent relationship"],
          a: 1,
          exp: "According to Beer–Lambert law, absorbance increases with concentration; %T decreases."
        },
        {
          q: "To find the peak wavelength of an unknown food dye extract, you should:",
          choices: ["Run a wavelength scan and locate the maximum", "Guess from the color", "Use 600 nm for all dyes", "Zero the instrument repeatedly"],
          a: 0,
          exp: "A scan reveals the λmax where absorbance is highest."
        },
        {
          q: "Diffusion is best described as:",
          choices: ["Movement from low to high concentration", "Movement down a concentration gradient", "Active transport using ATP", "Bulk flow independent of gradients"],
          a: 1,
          exp: "Diffusion proceeds from high to low concentration until equilibrium."
        },
        {
          q: "Osmosis refers specifically to the diffusion of:",
          choices: ["Any solute", "Water across a semipermeable membrane", "Ions through channels", "Large polymers across membranes"],
          a: 1,
          exp: "Osmosis is water diffusion through a selectively permeable membrane."
        },
        {
          q: "In dialysis tubing experiments, which molecules readily pass through the membrane?",
          choices: ["Starch and sucrose", "Sucrose and glucose", "Glucose and water", "Starch only"],
          a: 2,
          exp: "Small molecules like water and glucose cross; large polymers (starch) do not."
        },
        {
          q: "A potato strip becomes limp (flaccid) in 10% NaCl because the external solution is:",
          choices: ["Hypotonic; water enters the cells", "Isotonic; no net movement", "Hypertonic; water leaves the cells", "Supersaturated with glucose"],
          a: 2,
          exp: "Hypertonic surroundings draw water out; cells lose turgor."
        },
        {
          q: "Elodea cells in strong salt solution show chloroplasts clustered centrally. This is evidence of:",
          choices: ["Cytolysis", "Plasmolysis", "Endocytosis", "Photosynthetic bleaching"],
          a: 1,
          exp: "Water loss causes the membrane to pull from the wall, clustering organelles—plasmolysis."
        },
        {
          q: "Sheep RBCs in distilled water appear clear in suspension because:",
          choices: ["Cells shrink and scatter less light", "Cells burst and release hemoglobin", "Cells become more pigmented", "Cells aggregate"],
          a: 1,
          exp: "Hypotonic lysis releases hemoglobin, clearing the suspension and allowing text to be read through the tube."
        },
        {
          q: "Catalase converts hydrogen peroxide (H₂O₂) into:",
          choices: ["Water + oxygen", "Water only", "Oxygen only", "Water + carbon dioxide"],
          a: 0,
          exp: "Catalase disproportionates H₂O₂ → H₂O and O₂."
        },
        {
          q: "Enzymes speed reactions primarily by:",
          choices: ["Raising product energy", "Lowering activation energy", "Changing ΔG to negative", "Consuming substrate completely"],
          a: 1,
          exp: "They lower the activation energy barrier without altering ΔG of the reaction."
        },
        {
          q: "The region where a substrate binds and is oriented for reaction is called the:",
          choices: ["Allosteric site", "Catalytic groove", "Active site", "Cofactor pocket"],
          a: 2,
          exp: "Substrates interact at the enzyme’s active site."
        },
        {
          q: "Which factor does NOT typically denature catalase?",
          choices: ["Extreme pH", "High temperature", "Very high substrate concentration briefly", "Organic solvents"],
          a: 2,
          exp: "Briefly increasing substrate usually affects rate, not structure; extremes of pH/heat/solvents can denature proteins."
        },
        {
          q: "In a well‑designed enzyme experiment, which is a correct control?",
          choices: ["Boiled catalase sample", "Adding extra substrate to test tube", "Measuring room temperature only", "Using a different enzyme"],
          a: 0,
          exp: "Boiled (denatured) enzyme shows baseline non‑enzymatic decomposition of H₂O₂."
        },
        {
          q: "Increasing substrate concentration while enzyme is not saturated will generally:",
          choices: ["Decrease reaction rate", "Have no effect", "Increase reaction rate", "Denature the enzyme"],
          a: 2,
          exp: "Rate rises with substrate until active sites become saturated."
        },
        {
          q: "Aerobic cellular respiration yields a maximum of approximately how many ATP per glucose in eukaryotes?",
          choices: ["2", "12", "32", "64"],
          a: 2,
          exp: "Under textbook assumptions, ~30–32 ATP/glucose; many manuals cite 32."
        },
        {
          q: "During glycolysis, glucose is converted to:",
          choices: ["Citrate", "Acetyl‑CoA", "Pyruvate", "Oxaloacetate"],
          a: 2,
          exp: "Glycolysis yields two molecules of pyruvate per glucose."
        },
        {
          q: "At the end of the electron transport chain, the terminal electron acceptor is:",
          choices: ["NAD+", "FAD", "Oxygen (O₂)", "Carbon dioxide (CO₂)"],
          a: 2,
          exp: "Oxygen accepts electrons to form water."
        },
        {
          q: "In the pea seed experiment, CO₂ production is inferred by:",
          choices: ["Heat generation", "pH indicator color change", "Weight loss", "O₂ bubble formation"],
          a: 1,
          exp: "CO₂ dissolves to form carbonic acid, shifting the pH indicator’s color."
        },
        {
          q: "Methylene blue becomes colorless in respiring yeast because it:",
          choices: ["Is oxidized by O₂", "Is reduced by electrons from metabolism", "Dyes the cell wall irreversibly", "Hydrolyzes in water"],
          a: 1,
          exp: "It acts as a redox indicator; reduction removes its color."
        },
        {
          q: "Alcoholic fermentation releases CO₂ when:",
          choices: ["Pyruvate → acetaldehyde", "Acetaldehyde → ethanol", "Glucose → glucose‑6‑phosphate", "NADH → NAD⁺ at ETC"],
          a: 0,
          exp: "Decarboxylation of pyruvate to acetaldehyde releases CO₂."
        },
        {
          q: "A saccharometer setup with glucose but no yeast serves primarily as:",
          choices: ["A pH standard", "A negative control", "A positive control", "A temperature control"],
          a: 1,
          exp: "Without yeast, no fermentation occurs—verifying that gas rise requires live metabolism."
        },
        {
          q: "Chlorophyll a and b absorb most strongly in which regions of the visible spectrum?",
          choices: ["Green and yellow", "Red/orange and blue/violet", "Infrared and UV", "Only green"],
          a: 1,
          exp: "Chlorophylls absorb red‑orange and blue‑violet, reflecting green wavelengths."
        },
        {
          q: "Carotenoids primarily function to:",
          choices: ["Fix carbon directly", "Serve as the main chlorophyll", "Protect against excess light/UV and assist in light capture", "Pump protons across thylakoids"],
          a: 2,
          exp: "They aid photoprotection and broaden the absorption spectrum."
        },
        {
          q: "In paper chromatography of spinach pigments using nonpolar solvent, which pigment travels farthest?",
          choices: ["Chlorophyll b", "Chlorophyll a", "Xanthophylls", "β‑Carotene"],
          a: 3,
          exp: "β‑Carotene is most nonpolar and travels with the nonpolar solvent front."
        },
        {
          q: "The retention factor (Rf) is calculated as:",
          choices: ["Distance solvent ÷ distance pigment", "Distance pigment ÷ distance solvent", "1 − (distance pigment ÷ solvent)", "Distance origin to baseline"],
          a: 1,
          exp: "Rf = (distance traveled by pigment) / (distance traveled by solvent front)."
        },
        {
          q: "Under UV light, chlorophyll extract fluoresces red because:",
          choices: ["It oxidizes instantly", "Photons excite electrons that re‑emit at longer (red) wavelengths", "The solvent glows", "Proteins emit red light"],
          a: 1,
          exp: "Fluorescence occurs as excited chlorophyll releases energy as red photons."
        },
        {
          q: "Which statement about the electromagnetic spectrum is TRUE?",
          choices: ["Longer wavelengths carry more energy", "Visible light is the entire spectrum", "Shorter wavelengths carry more energy", "UV has less energy than red light"],
          a: 2,
          exp: "Energy is inversely proportional to wavelength; shorter λ → higher energy."
        },
        {
          q: "During photosynthesis, plants convert:",
          choices: ["CO₂ and water into glucose using light energy", "Glucose into CO₂ using light", "ATP into light and heat", "Nitrogen into amino acids using light"],
          a: 0,
          exp: "Light energy drives the fixation of CO₂ and reduction to carbohydrates."
        },
        {
          q: "In an absorption spectrum run of leaf extracts, a peak near 662 nm most likely corresponds to:",
          choices: ["Chlorophyll a", "Chlorophyll b", "Xanthophyll", "Carotene"],
          a: 0,
          exp: "Chlorophyll a shows strong absorption around ~430 nm and ~662 nm."
        }
      ]
    },
{
  key: "W7_Ch7_Part1_CellResp",
  label: "W7 Lecture9 Ch7 Part 1 – Cellular Respiration & Glycolysis",
  questions: [
    {
      q: "Cellular respiration primarily harvests energy by transferring ____ from food molecules.",
      choices: ["protons", "electrons", "neutrons", "phosphate groups"],
      a: 1,
      exp: "Energy capture is tied to electron transfer; reduced carriers (NADH, FADH₂) store high‑energy electrons."
    },
    {
      q: "In redox reactions, the molecule that ____ electrons is oxidized; the molecule that ____ electrons is reduced.",
      choices: ["gains; gains", "loses; gains", "gains; loses", "loses; loses"],
      a: 1,
      exp: "Oxidation is loss, reduction is gain (OIL RIG)."
    },
    {
      q: "NAD⁺ functions mainly as a(n) ____ in catabolism.",
      choices: ["enzyme", "electron carrier (oxidized form)", "structural lipid", "ATP synthase subunit"],
      a: 1,
      exp: "NAD⁺ accepts electrons to become NADH and later donates them to the electron transport chain."
    },
    {
      q: "Compared with NAD⁺, the reduced form NADH carries ____.",
      choices: ["fewer electrons and more protons", "2 more electrons and 1 more proton (H⁺)", "no additional charge", "a phosphate group"],
      a: 1,
      exp: "Slide calls out that NADH carries 2e⁻ and 1H⁺ more than NAD⁺."
    },
    {
      q: "ATP → ADP + Pi is ____ and can drive coupled ____ reactions.",
      choices: ["endergonic; exergonic", "exergonic; endergonic", "exergonic; exergonic", "endergonic; endergonic"],
      a: 1,
      exp: "ATP hydrolysis releases free energy to power endergonic cellular work."
    },
    {
      q: "Phosphorylation is best defined as ____.",
      choices: ["removing Pi from a molecule", "adding a phosphate group (Pi) to a molecule", "splitting water into H⁺ and OH⁻", "reducing NAD⁺ to NADH"],
      a: 1,
      exp: "Adding phosphate often increases reactivity; dephosphorylation removes phosphate."
    },
    {
      q: "Approximately what fraction of ATP is produced by chemiosmosis in aerobic cells?",
      choices: ["~10%", "~50%", "~90%", "100%"],
      a: 2,
      exp: "Slides note that about 90% of ATP is produced via chemiosmosis (oxidative phosphorylation)."
    },
    {
      q: "Glycolysis occurs in the ____ and ____ require O₂.",
      choices: ["mitochondrial matrix; does", "cytosol; does not", "inner membrane; does", "nucleus; does not"],
      a: 1,
      exp: "Glycolysis runs in the cytoplasm and is anaerobic by itself."
    },
    {
      q: "Inputs of glycolysis (per glucose) include ____; outputs include ____.",
      choices: ["1 glucose, 2 NAD⁺, 2 ATP → 2 pyruvate, 2 NADH, 4 ATP (net 2)", "1 glucose → 2 CO₂ only", "O₂ → H₂O only", "2 pyruvate → 1 glucose"],
      a: 0,
      exp: "Investment of 2 ATP yields 4 ATP and 2 NADH; net ATP = 2."
    },
    {
      q: "The first half of glycolysis is the ____ phase and uses ____ ATP.",
      choices: ["payoff; 4", "investment; 2", "investment; 4", "payoff; 2"],
      a: 1,
      exp: "Two ATP are invested to phosphorylate and split glucose to G3P."
    },
    {
      q: "ATP made directly in glycolysis is produced by ____.",
      choices: ["oxidative phosphorylation", "substrate‑level phosphorylation", "photophosphorylation", "autophosphorylation"],
      a: 1,
      exp: "A phosphate is transferred from an intermediate to ADP to make ATP."
    },
    {
      q: "Net ATP produced by glycolysis per glucose is ____.",
      choices: ["4", "3", "2", "1"],
      a: 2,
      exp: "Four produced minus two invested → net two ATP."
    },
    {
      q: "Net NADH produced by glycolysis per glucose is ____.",
      choices: ["1", "2", "3", "4"],
      a: 1,
      exp: "Two NAD⁺ are reduced to NADH during the payoff phase."
    },
    {
      q: "The term 'electron carrier' in respiration refers to molecules like ____.",
      choices: ["RuBP and PEP", "NAD⁺/NADH and FAD/FADH₂", "ATP and Pi only", "G3P and pyruvate"],
      a: 1,
      exp: "NAD⁺/NADH and FAD/FADH₂ shuttle electrons to the ETC."
    },
    {
      q: "Substrate‑level phosphorylation occurs in which stages of cellular respiration?",
      choices: ["Only in oxidative phosphorylation", "Glycolysis (and once per citric acid cycle turn)", "Only in photosystems", "Only in fermentation"],
      a: 1,
      exp: "Direct ATP formation occurs in glycolysis and the CAC (as ATP or GTP)."
    },
  ]
},
{
  key: "W7_Ch7_Part2_CellResp",
  label: "W7 Lecture9 Ch7 Part 2 – Pyruvate Oxidation, CAC, OxPhos",
  questions: [
    {
      q: "Pyruvate oxidation in mitochondria (per pyruvate) produces ____.",
      choices: ["1 CO₂ and 1 NADH, forms acetyl‑CoA", "2 CO₂ and 2 NADH", "1 FADH₂ and 1 ATP", "no byproducts"],
      a: 0,
      exp: "Each pyruvate yields CO₂, reduces NAD⁺ to NADH, and attaches CoA to form acetyl‑CoA."
    },
    {
      q: "The citric acid cycle (CAC) occurs in the ____ and begins by combining acetyl‑CoA with ____.",
      choices: ["inner membrane; citrate", "matrix; oxaloacetate", "cytosol; pyruvate", "intermembrane space; NADH"],
      a: 1,
      exp: "Acetyl joins oxaloacetate to form citrate in the mitochondrial matrix."
    },
    {
      q: "Per turn of the CAC (per acetyl‑CoA), which set is correct?",
      choices: ["3 NADH, 1 FADH₂, 1 ATP/GTP, 2 CO₂", "2 NADH, 2 FADH₂, 2 ATP, 1 CO₂", "1 NADH, 3 FADH₂, 2 ATP, 0 CO₂", "0 NADH, 0 FADH₂, 2 ATP, 2 CO₂"],
      a: 0,
      exp: "Slides list 3 NADH, 1 FADH₂, release 2 CO₂, and one ATP/GTP per cycle turn."
    },
    {
      q: "By the end of the CAC (per glucose), glucose carbons are ____.",
      choices: ["stored as G3P", "partly oxidized", "completely oxidized to CO₂", "unchanged"],
      a: 2,
      exp: "Glucose is fully oxidized after the CAC completes."
    },
    {
      q: "Up to this point (glycolysis + pyruvate oxidation + CAC), per glucose the totals are best summarized as ____.",
      choices: ["4 ATP, 6 CO₂, 10 NADH, 2 FADH₂", "2 ATP, 2 CO₂, 2 NADH, 0 FADH₂", "6 ATP, 2 CO₂, 6 NADH, 6 FADH₂", "4 ATP, 2 CO₂, 6 NADH, 0 FADH₂"],
      a: 0,
      exp: "Slides summarize 4 ATP (2 glycolysis, 2 CAC), 6 CO₂, 10 NADH, 2 FADH₂."
    },
    {
      q: "Which pathway uses O₂ directly?",
      choices: ["Glycolysis", "Citric acid cycle", "Oxidative phosphorylation (electron transport + chemiosmosis)", "Fermentation"],
      a: 2,
      exp: "Oxygen is the terminal electron acceptor in the ETC (complex IV)."
    },
    {
      q: "During the mitochondrial ETC, electrons from NADH enter at ____ and ultimately reduce ____.",
      choices: ["complex I; O₂ to H₂O", "complex II; CO₂ to glucose", "complex III; NAD⁺", "complex IV; FAD"],
      a: 0,
      exp: "NADH donates to complex I; O₂ is reduced at complex IV to H₂O."
    },
    {
      q: "Electrons from FADH₂ enter the ETC at ____.",
      choices: ["complex I", "complex II", "complex III", "ATP synthase"],
      a: 1,
      exp: "FADH₂ donates to complex II (succinate dehydrogenase path)."
    },
    {
      q: "Ubiquinone (Q) and cytochrome c function as ____.",
      choices: ["ATP synthases", "mobile electron carriers within the inner membrane system", "proton channels", "oxygen carriers"],
      a: 1,
      exp: "Q shuttles e⁻ from I/II to III; cytochrome c shuttles from III to IV."
    },
    {
      q: "The proton gradient used for ATP synthesis is established across the ____.",
      choices: ["outer mitochondrial membrane", "inner mitochondrial membrane (matrix ↔ intermembrane space)", "plasma membrane only", "nuclear envelope"],
      a: 1,
      exp: "H⁺ are pumped from matrix to intermembrane space by ETC complexes."
    },
    {
      q: "Chemiosmosis describes ____.",
      choices: ["direct transfer of Pi from substrate to ADP", "H⁺ flowing down its gradient through ATP synthase to power ATP formation", "the synthesis of NADH", "CO₂ diffusion into mitochondria"],
      a: 1,
      exp: "ATP synthase harnesses the proton‑motive force to drive ATP production."
    },
    {
      q: "Which is the typical ATP yield per glucose in aerobic respiration (species‑dependent)?",
      choices: ["12–18 ATP", "20–24 ATP", "30–36 ATP", "50–60 ATP"],
      a: 2,
      exp: "Slides list ~30–36 ATP per glucose depending on shuttle efficiency/species."
    },
    {
      q: "Cellular respiration stores roughly ____ of glucose’s energy in ATP.",
      choices: ["~10%", "~34%", "~67%", "~95%"],
      a: 1,
      exp: "Slide: ~34% energy capture in ATP, the rest lost as heat, etc."
    },
    {
      q: "Which component is the final electron acceptor in the ETC?",
      choices: ["NAD⁺", "FAD", "O₂", "CoA"],
      a: 2,
      exp: "Molecular oxygen accepts electrons and protons to form water at complex IV."
    },
    {
      q: "Which complex is named 'cytochrome oxidoreductase' in the slides?",
      choices: ["Complex I", "Complex II", "Complex III", "Complex IV"],
      a: 2,
      exp: "Complex III is referred to as cytochrome oxidoreductase; complex IV reduces O₂."
    },
  ]
},
{
  key: "W7_Ch7_Part3_CellResp",
  label: "W7 Lecture9 Ch7 Part 3 – Fermentation & Regulation",
  questions: [
    {
      q: "When O₂ is absent, why would glycolysis eventually halt without another pathway?",
      choices: ["ATP cannot be made by substrate‑level phosphorylation", "NAD⁺ would become depleted", "pyruvate cannot form", "protons cannot be pumped"],
      a: 1,
      exp: "Glycolysis requires NAD⁺; fermentation regenerates NAD⁺ from NADH so glycolysis can continue."
    },
    {
      q: "Fermentation’s primary role is to ____.",
      choices: ["produce large amounts of ATP", "regenerate NAD⁺ so glycolysis can continue", "oxidize acetyl‑CoA", "pump protons across membranes"],
      a: 1,
      exp: "Fermentation restores NAD⁺; net ATP still only comes from glycolysis (2 ATP per glucose)."
    },
    {
      q: "Lactic acid fermentation converts pyruvate to ____.",
      choices: ["ethanol + CO₂", "acetyl‑CoA", "lactate", "oxaloacetate"],
      a: 2,
      exp: "Lactate dehydrogenase reduces pyruvate to lactate and regenerates NAD⁺."
    },
    {
      q: "Alcohol fermentation occurs in anaerobic yeasts and proceeds via ____ then ____.",
      choices: ["alcohol dehydrogenase; lactate dehydrogenase", "pyruvate decarboxylase; alcohol dehydrogenase", "ATP synthase; hexokinase", "pyruvate carboxylase; citrate synthase"],
      a: 1,
      exp: "First decarboxylation to acetaldehyde, then reduction to ethanol regenerating NAD⁺."
    },
    {
      q: "A common industrial concern during alcohol fermentation is handling ____.",
      choices: ["N₂ accumulation", "CO₂ pressure", "excess O₂", "ammonia toxicity"],
      a: 1,
      exp: "Fermentation tanks include valves to release CO₂ produced."
    },
    {
      q: "Which statement about glycolysis and fermentation is TRUE?",
      choices: ["glycolysis requires O₂", "fermentation generates most cellular ATP", "glycolysis occurs with or without O₂; fermentation sustains NAD⁺ without O₂", "fermentation occurs in mitochondria"],
      a: 2,
      exp: "Glycolysis is anaerobic; fermentation sustains it by recycling NAD⁺."
    },
    {
      q: "Lipids and proteins can feed into respiration by entering ____.",
      choices: ["the nucleus", "glycolysis and/or the citric acid cycle at various intermediates", "the chloroplast stroma", "the Golgi apparatus"],
      a: 1,
      exp: "Slides note connections of lipid and protein catabolism into glycolysis/CAC."
    },
    {
      q: "Amino acids enter the citric acid cycle at ____.",
      choices: ["only citrate", "various points depending on the amino acid", "only oxaloacetate", "only α‑ketoglutarate"],
      a: 1,
      exp: "Different amino acids are converted to different CAC intermediates."
    },
    {
      q: "All are listed mechanisms regulating respiration EXCEPT ____.",
      choices: ["hormonal control of glucose entry", "enzyme reversibility/irreversibility", "pH sensitivity due to lactate", "chromosome condensation"],
      a: 3,
      exp: "The slides mention hormones, enzyme control, pH sensitivity, and feedback—not chromosome condensation."
    },
    {
      q: "Feedback inhibition in respiration typically means ____.",
      choices: ["end products activate early enzymes", "end products inhibit upstream enzymes to prevent excess product", "ATP activates phosphofructokinase (PFK)", "AMP inhibits PFK"],
      a: 1,
      exp: "End products (or high ATP/citrate) can inhibit key steps, conserving resources."
    },
    {
      q: "Which statement about lactic acid fermentation is TRUE per the slides?",
      choices: ["occurs only in plants", "occurs in muscle cells when O₂ is limited and in some bacteria", "requires mitochondria", "produces CO₂"],
      a: 1,
      exp: "Slides list muscle cells, RBCs, and some bacteria (e.g., yogurt) using lactic fermentation."
    },
    {
      q: "Which statement about alcohol fermentation is TRUE per the slides?",
      choices: ["involves pyruvate carboxylase", "produces lactate from pyruvate", "occurs in some yeast and produces ethanol + CO₂", "requires O₂"],
      a: 2,
      exp: "Alcohol fermentation yields CO₂ and ethanol under anaerobic conditions in certain yeasts."
    },
    {
      q: "Fermentation occurs in the ____ of the cell.",
      choices: ["cytoplasm", "mitochondrial matrix", "intermembrane space", "inner membrane"],
      a: 0,
      exp: "The listed enzymes operate in the cytoplasm."
    },
    {
      q: "Which best summarizes why feedback controls matter for respiration?",
      choices: ["ensure constant maximal ATP output", "coordinate ATP production with demand and substrate availability", "prevent NAD⁺ from forming", "keep glycolysis permanently off"],
      a: 1,
      exp: "Feedback lets the cell match energy production to current needs."
    },
    {
      q: "Which of the following pairs correctly matches pathway with ATP‑making mechanism?",
      choices: ["glycolysis — chemiosmosis", "CAC — substrate‑level phosphorylation (1 per turn as ATP/GTP)", "oxidative phosphorylation — substrate‑level phosphorylation", "fermentation — oxidative phosphorylation"],
      a: 1,
      exp: "CAC generates ATP/GTP at one step by substrate‑level phosphorylation; OxPhos uses chemiosmosis."
    },
  ]
},
], []);

  /** --------------------------- Helpers --------------------------- **/

// Helpers to manage multi-select state
const addKey = (arr, key) => (arr.includes(key) ? arr : [...arr, key]);
const removeKey = (arr, key) => arr.filter((k) => k !== key);
const setAllModules = () => setModuleKeys([ALL.key]);
const clearAllModules = () => setModuleKeys([]);

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
      onClick={() => setAllModules()}
      className="rounded-xl bg-slate-100 px-3 py-1 text-slate-800 shadow hover:bg-slate-200"
      title="Select all modules (Mixed)"
    >
      All
    </button>
    <button
      type="button"
      onClick={() => clearAllModules()}
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


// ===== Component: Exam3_FITB_Lab15_Lab20 =====

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

function Exam3_FITB_Lab15_Lab20() {  const QUESTIONS = useMemo(() => ([
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


// ===== Component: Exam3_MCQ_Lec11_Lec14_Lab15_Lab20 =====

/**
 * BioMegaQuiz — React + Tailwind single-file quiz
 * - 15 questions per module (expanded)
 * - Modules: Plasma Membranes (3 parts), Metabolism (3 parts), Viruses (2 parts)
 * - Mixed mode (All) + module filter, randomization, scoring, review, reshuffle
 */

function Exam3_MCQ_Lec11_Lec14_Lab15_Lab20() {
  /** --------------------------- Question Data --------------------------- **/
  // 15 questions per module (expanded as requested)
  // Module keys match dropdown filter labels.

  const modules = useMemo(() => [



{
  key: "W8_Ch14_Part1_DNA",
  label: "W8 Lecture11 Ch14 Part 1 – DNA Structure & Function",
  questions: [
    {
      q: "Miescher’s ‘nuclein’ was…",
      choices: ["a protein‑lipid complex lacking phosphorus", "a phosphate‑rich acidic substance later known as DNA", "pure RNA", "a glycoprotein from membranes"],
      a: 1,
      exp: "He isolated a phosphorus‑rich acidic substance from nuclei, later called DNA."
    },
    {
      q: "Griffith’s experiments showed…",
      choices: ["proteins are the genetic material", "a heritable factor from heat‑killed S cells transformed R cells", "only live S cells cause death; mixtures are harmless", "RNA is the transforming principle"],
      a: 1,
      exp: "A factor transferred virulence from dead S to live R bacteria."
    },
    {
      q: "Avery, MacLeod, and McCarty identified DNA as the transforming principle because…",
      choices: ["protease eliminated transformation", "RNase eliminated transformation", "DNase eliminated transformation", "lipase eliminated transformation"],
      a: 2,
      exp: "Only DNase abolished transformation in their extracts."
    },
    {
      q: "In Hershey–Chase, which label entered the bacteria?",
      choices: ["³⁵S (protein)", "³²P (DNA)", "¹⁴C (lipid)", "³H (RNA)"],
      a: 1,
      exp: "³²P‑labeled DNA entered the cells; ³⁵S protein remained with coats."
    },
    {
      q: "Chargaff’s rules state…",
      choices: ["%A ≈ %G; %T ≈ %C", "%A ≈ %T; %G ≈ %C", "%A+%T = %C+%G in all species", "purines never equal pyrimidines"],
      a: 1,
      exp: "Complementary base pairing gives A≈T and G≈C, though overall GC% varies."
    },
    {
      q: "A nucleotide consists of…",
      choices: ["sugar + phosphate only", "base + sugar + phosphate", "base + phosphate only", "base only"],
      a: 1,
      exp: "Nucleotides = base + pentose sugar + phosphate."
    },
    {
      q: "DNA strands are…",
      choices: ["parallel and identical polarity", "antiparallel with specific base pairing", "triple helical in cells", "not directional"],
      a: 1,
      exp: "The two strands run antiparallel with A–T (2 H‑bonds) and G–C (3 H‑bonds)."
    },
    {
      q: "Major and minor grooves are important because…",
      choices: ["they prevent protein binding", "they give proteins access to base sequences for regulation", "they hold ribosomes", "they store ATP"],
      a: 1,
      exp: "DNA‑binding proteins read sequence information in the grooves."
    },
    {
      q: "Sanger sequencing works because ddNTPs…",
      choices: ["speed polymerase processivity", "lack a 3′‑OH and terminate extension", "are fluorescent amino acids", "cut DNA at specific sites"],
      a: 1,
      exp: "Chain‑terminating ddNTPs halt extension; fragments are read by size."
    },
    {
      q: "Gel electrophoresis separates DNA primarily by…",
      choices: ["charge sign", "base composition", "size (length)", "GC content only"],
      a: 2,
      exp: "DNA fragments migrate by size through agarose under an electric field."
    },
    {
      q: "Which is TRUE of Rosalind Franklin’s contribution?",
      choices: ["She discovered RNA polymerase.", "Her X‑ray diffraction images helped reveal the helical DNA structure.", "She invented ddNTPs.", "She first sequenced a genome."],
      a: 1,
      exp: "Franklin’s diffraction data supported a helical, repeating structure."
    },
    {
      q: "Which pairing of base bonds is correct?",
      choices: ["A–T forms 3 H‑bonds; G–C forms 2", "A–T forms 2 H‑bonds; G–C forms 3", "A–T and G–C both form 2", "A–T forms 1; G–C forms 4"],
      a: 1,
      exp: "A–T has two; G–C has three hydrogen bonds."
    },
    {
      q: "Phosphodiester bonds connect…",
      choices: ["bases across strands", "sugar‑phosphate backbone within a strand", "proteins to DNA", "adjacent bases via H‑bonds"],
      a: 1,
      exp: "The backbone within each strand is sugar‑phosphate linked by phosphodiester bonds."
    },
    {
      q: "In cells, DNA is primarily…",
      choices: ["single‑stranded and circular", "double‑stranded with complementary pairing", "RNA–DNA hybrid only", "protein‑coated with no bases exposed"],
      a: 1,
      exp: "Cellular DNA is double‑stranded with complementary bases."
    },
    {
      q: "During transcription (definition reminder), the cell…",
      choices: ["copies RNA from DNA", "replicates DNA into DNA", "translates mRNA into protein", "repairs UV damage"],
      a: 0,
      exp: "Transcription is the synthesis of RNA using a DNA template."
    },
        { q: "Which component of a nucleotide differs between DNA and RNA?", choices: ["Phosphate group", "Nitrogenous base identities and sugar (deoxyribose vs ribose)", "The presence of a peptide bond", "All components are identical"], a: 1, exp: "RNA contains ribose and usually uracil, whereas DNA contains deoxyribose and thymine. This chemical difference alters stability and base\u2011pairing properties." },
        { q: "What feature of the double helix most directly enables sequence\u2011specific DNA\u2011binding proteins to recognize bases without unwinding the helix?", choices: ["Uniform major and minor grooves", "Random coil segments", "Backbone phosphates only", "Intercalating dyes"], a: 0, exp: "The major and minor grooves expose characteristic hydrogen\u2011bond donor/acceptor patterns of each base pair. Proteins read these patterns to recognize particular sequences." },
        { q: "Which pairing is correct regarding hydrogen bonds in B\u2011DNA?", choices: ["A\u2013T three; G\u2013C two", "A\u2013T two; G\u2013C three", "A\u2013T one; G\u2013C four", "A\u2013T and G\u2013C both two"], a: 1, exp: "Adenine\u2013thymine forms two hydrogen bonds, while guanine\u2013cytosine forms three. This explains why GC\u2011rich regions often have higher melting temperatures." },
        { q: "Chargaff\u2019s analysis across species led to which conclusion beyond A=T and G=C?", choices: ["All species share identical GC content", "GC content varies between species", "Only RNA follows the rule", "Purines always exceed pyrimidines two\u2011fold"], a: 1, exp: "While base\u2011pair equivalences hold within a species, the overall proportion of G+C differs dramatically among species. This observation helped dismiss a repetitive tetranucleotide hypothesis." },
        { q: "Which statement about Sanger sequencing capillary reads is accurate?", choices: ["Fragments are separated by density gradients", "Laser detection records different fluorescent tags on ddNTP\u2011terminated fragments", "The smallest fragments elute last", "All fragments are the same length"], a: 1, exp: "Each ddNTP carries a distinct dye, so terminated fragments generate color peaks as they pass the detector. Base calls derive from the ordered sequence of peaks by length." },
        { q: "During gel electrophoresis of DNA, why do fragments migrate toward the anode?", choices: ["They are positively charged due to bases", "They are negatively charged due to the phosphate backbone", "They are uncharged and move randomly", "Capillary action pulls them"], a: 1, exp: "Phosphate groups confer a net negative charge on DNA, attracting fragments to the positive electrode. The agarose matrix separates them by size as they migrate." },
        { q: "What is the primary covalent linkage connecting nucleotides within a strand of DNA?", choices: ["Glycosidic linkage between phosphates", "Peptide bond between bases", "Phosphodiester bond between 3\u2032\u2011OH and 5\u2032\u2011phosphate", "Disulfide bond between sugars"], a: 2, exp: "Adjacent nucleotides join via phosphodiester bonds connecting the 3\u2032\u2011hydroxyl of one sugar to the 5\u2032\u2011phosphate of the next. This forms the sugar\u2011phosphate backbone." },
        { q: "Which observation from Griffith\u2019s experiments directly suggested heritable information transfer?", choices: ["Heat\u2011killed S alone killed mice", "Live R alone killed mice", "Live R mixed with heat\u2011killed S killed mice and yielded live S", "Heat\u2011killed R transformed S"], a: 2, exp: "Only the mixture of live R with heat\u2011killed S caused disease and produced live S cells. This implied a transferable 'transforming principle' later shown to be DNA." },
        { q: "In the Avery\u2013MacLeod\u2013McCarty follow\u2011up, which enzyme treatment abolished transformation?", choices: ["Protease", "RNase", "DNase", "Lipase"], a: 2, exp: "Destruction of DNA eliminated the transforming activity, while removing proteins or RNA did not. This provided strong evidence that DNA is the genetic material." },
        { q: "Hershey\u2013Chase used 32P and 35S labels for what reason?", choices: ["32P labels protein; 35S labels DNA", "Both label DNA strongly", "32P labels DNA; 35S labels protein", "Neither is useful for labeling"], a: 2, exp: "Phosphorus is abundant in nucleic acids but not in amino acids, while sulfur is present in some amino acids but not in DNA. This allowed differential tracking of DNA vs protein in phage infection." },
        { q: "What immediate effect does incorporation of a ddNTP have during DNA synthesis?", choices: ["It increases elongation speed", "It terminates chain extension due to missing 3\u2032\u2011OH", "It converts dsDNA to ssDNA", "It reverses polarity of synthesis"], a: 1, exp: "Dideoxynucleotides lack a 3\u2032\u2011hydroxyl, preventing formation of the next phosphodiester bond. This stops further extension at that base, producing a ladder of terminated fragments." },
        { q: "Which statement best describes the directionality of the two DNA strands?", choices: ["Both run 5\u2032\u21923\u2032 in the same direction", "One runs 5\u2032\u21923\u2032 while the complementary runs 3\u2032\u21925\u2032", "Directionality is undefined", "Orientation switches after every base"], a: 1, exp: "Double\u2011stranded DNA is antiparallel: the strands have opposite polarity. This geometry is fundamental for proper base pairing and replication." },
        { q: "Which lane on a gel will contain the shortest DNA fragments after Sanger sequencing?", choices: ["Nearest the wells", "Nearest the anode (furthest migration)", "Middle of the gel", "Position is random"], a: 1, exp: "Smaller fragments migrate faster through agarose or capillaries and thus travel farther. Therefore, the shortest fragments are found nearest the positive electrode." },
        { q: "Which scientist\u2019s X\u2011ray data were pivotal for deducing the helix dimensions of DNA?", choices: ["Rosalind Franklin", "Gregor Mendel", "Thomas Hunt Morgan", "Barbara McClintock"], a: 0, exp: "Franklin\u2019s diffraction patterns constrained helix pitch and diameter, informing the double\u2011helix model. Her images showed the repeating, helical nature of DNA." },
        { q: "Which feature of nucleotides ensures specific pairing (A with T; G with C)?", choices: ["Identical base sizes", "Complementary hydrogen\u2011bond donor/acceptor patterns and purine\u2013pyrimidine geometry", "Covalent cross\u2011linking", "Random ionic interactions"], a: 1, exp: "A purine pairing with a pyrimidine maintains uniform helix width and allows optimal hydrogen bonding. Mismatched pairs distort the helix and are less stable." },
    ]
}
,
{
  key: "W8_Ch14_Part2_DNA",
  label: "W8 Lecture11 Ch14 Part 2 – DNA Packaging & Replication",
  questions: [
    {
      q: "In eukaryotes, DNA is packaged with histones into…",
      choices: ["nucleosomes and higher‑order chromatin", "peptidoglycan", "capsids", "sporopollenin"],
      a: 0,
      exp: "DNA wraps around histone octamers to form nucleosomes; further coiling compacts chromosomes."
    },
    {
      q: "Heterochromatin vs euchromatin: which is TRUE?",
      choices: ["heterochromatin is tightly packed and genes are generally not expressed", "euchromatin is tightly packed and never expressed", "both are equally expressed", "terms refer to mitochondrial DNA only"],
      a: 0,
      exp: "Heterochromatin is condensed/inactive; euchromatin is more open/active."
    },
    {
      q: "Prokaryotic vs eukaryotic gene expression:",
      choices: ["both transcription and translation occur together only in eukaryotes", "in prokaryotes they can be coupled spatially and temporally", "in eukaryotes they occur in the cytosol together", "neither has ribosomes"],
      a: 1,
      exp: "In prokaryotes, transcription/translation can be simultaneous; eukaryotes separate them by the nucleus."
    },
    {
      q: "Which replication model did Meselson–Stahl support?",
      choices: ["conservative", "semi‑conservative", "dispersive", "rolling‑circle only"],
      a: 1,
      exp: "Density‑shift experiments supported semi‑conservative replication."
    },
    {
      q: "Topoisomerase in replication…",
      choices: ["unwinds DNA at the fork (helicase role)", "relieves supercoiling ahead of the fork", "lays down RNA primers", "ligates Okazaki fragments"],
      a: 1,
      exp: "Topoisomerase prevents overwinding as helicase opens the helix."
    },
    {
      q: "Single‑strand binding proteins (SSB)…",
      choices: ["remove RNA primers", "prevent re‑annealing of separated strands", "add telomere repeats", "cut damaged bases"],
      a: 1,
      exp: "SSB stabilize unwound DNA until replication proceeds."
    },
    {
      q: "Primase…",
      choices: ["adds DNA nucleotides to fill gaps", "synthesizes short RNA primers", "seals nicks", "removes positive supercoils only"],
      a: 1,
      exp: "Primase lays down RNA primers for DNA polymerases to extend."
    },
    {
      q: "DNA polymerase III (prokaryote) primarily…",
      choices: ["extends the leading/lagging strands from RNA primers", "removes primers", "seals nicks", "adds telomeres"],
      a: 0,
      exp: "Pol III performs bulk DNA synthesis."
    },
    {
      q: "DNA polymerase I (prokaryote) primarily…",
      choices: ["creates the gradient for ATP synthase", "replaces RNA primers with DNA", "supercoils DNA", "transcribes rRNA"],
      a: 1,
      exp: "Pol I removes RNA primers and fills with DNA."
    },
    {
      q: "DNA ligase…",
      choices: ["joins Okazaki fragments by sealing phosphodiester bonds", "unwinds the helix", "adds ribonucleotides", "translocates ribosomes"],
      a: 0,
      exp: "Ligase seals nicks to create continuous DNA."
    },
    {
      q: "Okazaki fragments are characteristic of the…",
      choices: ["leading strand", "lagging strand", "RNA strand", "telomeres only"],
      a: 1,
      exp: "The lagging strand is synthesized discontinuously."
    },
    {
      q: "Compared with eukaryotes, prokaryotic chromosomes usually have…",
      choices: ["multiple origins per chromosome", "a single origin on a circular chromosome", "no helicase requirement", "linear telomeres"],
      a: 1,
      exp: "Typical bacteria have one circular chromosome with one ori."
    },
    {
      q: "A replication fork forms when…",
      choices: ["RNA polymerase binds a promoter", "helicase separates strands at the origin", "ligase cuts DNA", "telomerase extends ends"],
      a: 1,
      exp: "Helicase opens the helix at ori, creating forks."
    },
    {
      q: "Eukaryotic DNA replication uses…",
      choices: ["fewer origins than bacteria", "many origins to speed replication of large linear chromosomes", "only one origin per chromosome", "rolling‑circle exclusively"],
      a: 1,
      exp: "Multiple origins ensure timely duplication of long chromosomes."
    },
    {
      q: "Ultracentrifugation in CsCl in Meselson–Stahl revealed after one generation…",
      choices: ["only heavy DNA", "only light DNA", "intermediate density DNA", "no DNA"],
      a: 2,
      exp: "A hybrid (intermediate) band indicated semi‑conservative replication."
    },
        { q: "In prokaryotes, transcription and translation can be coupled because\u2026", choices: ["they happen in different compartments", "both occur in the cytoplasm without a nucleus", "ribosomes are absent", "DNA is linear with telomeres"], a: 1, exp: "Bacteria lack a membrane\u2011bound nucleus, so ribosomes can begin translating mRNA while it is being transcribed. Eukaryotes separate these processes by the nuclear envelope." },
        { q: "Which statement about chromatin is accurate per the slides?", choices: ["Nucleosomes consist of DNA wrapped around histone octamers", "Nucleosomes are RNA\u2013protein particles", "Chromatin compaction is identical in all cells at all times", "Histones are not involved in packaging"], a: 0, exp: "DNA coils around histone octamers to form nucleosomes\u2014the first level of packaging. Higher\u2011order folding yields fibers, loops, and condensed chromosomes." },
        { q: "What experimental pattern in Meselson\u2013Stahl ruled out conservative replication?", choices: ["A heavy band that persisted alone after one generation", "Only light DNA after one generation", "A single intermediate band after one generation", "No bands at all"], a: 2, exp: "Semi\u2011conservative replication predicts hybrids after one generation as each duplex contains one old and one new strand. Conservative replication would have produced separate heavy and light bands." },
        { q: "After two generations in 14N, what bands were observed?", choices: ["Only heavy", "Only light", "One light band and one hybrid band", "Two heavy bands"], a: 2, exp: "Semi\u2011conservative replication yields some duplexes that are entirely light and some that remain hybrid. This pattern matches the ultracentrifugation data." },
        { q: "Which enzyme lays down the short RNA primers needed for DNA synthesis?", choices: ["DNA polymerase III", "DNA polymerase I", "Primase", "Ligase"], a: 2, exp: "Primase synthesizes short RNA primers (about 5\u201310 nucleotides). DNA polymerases extend from these primers because they require a free 3\u2032\u2011OH." },
        { q: "Which activity uniquely allows DNA polymerase I to remove RNA primers?", choices: ["3\u2032\u21925\u2032 exonuclease", "5\u2032\u21923\u2032 exonuclease", "Helicase ATPase", "Topoisomerase cleavage"], a: 1, exp: "Pol I has a 5\u2032\u21923\u2032 exonuclease that excises RNA primers ahead of synthesis while replacing them with DNA. This is distinct from 3\u2032\u21925\u2032 proofreading." },
        { q: "Why are Okazaki fragments produced on the lagging strand?", choices: ["DNA polymerase synthesizes 3\u2032\u21925\u2032 on that strand", "Synthesis proceeds away from the fork so re\u2011priming is required", "Helicase only loads on the lagging strand", "Ligase cannot work on the leading strand"], a: 1, exp: "Because polymerases can only extend 5\u2032\u21923\u2032, the antiparallel template forces discontinuous synthesis opposite the fork movement. Each fragment begins with a new RNA primer." },
        { q: "Topoisomerase prevents replication fork stalling primarily by\u2026", choices: ["adding nucleotides", "relieving positive supercoils ahead of the fork", "sealing nicks", "loading sliding clamps"], a: 1, exp: "As helicase unwinds DNA, torsional strain builds. Topoisomerase transiently breaks and rejoins DNA to dissipate overwinding, allowing the fork to progress." },
        { q: "In bacteria, how many origins of replication are typical per chromosome?", choices: ["One", "Dozens", "Hundreds", "None"], a: 0, exp: "Prokaryotic chromosomes are usually circular with a single ori from which two forks proceed bidirectionally. Eukaryotic chromosomes use many origins." },
        { q: "What is the immediate role of DNA ligase at the fork?", choices: ["Polymerize nucleotides", "Join adjacent DNA fragments by sealing the backbone", "Load helicase", "Synthesize RNA primers"], a: 1, exp: "Ligase creates the missing phosphodiester bond between fragments, particularly on the lagging strand. This restores a continuous sugar\u2011phosphate backbone." },
        { q: "Which replicative feature speeds duplication of large eukaryotic genomes?", choices: ["A single ori per chromosome", "Multiple origins along each chromosome", "Circular chromosomes only", "Proofreading absence"], a: 1, exp: "Numerous initiation sites along linear chromosomes allow many forks to work simultaneously. This reduces total replication time." },
        { q: "SSB proteins are necessary because\u2026", choices: ["they cut damaged bases", "they prevent re\u2011annealing and secondary structures in single\u2011stranded DNA", "they ligate fragments", "they degrade RNA primers"], a: 1, exp: "Unpaired DNA tends to re\u2011anneal or form hairpins; SSB coats and stabilizes the strands. This keeps templates available for polymerases." },
        { q: "The clamp/clamp loader complex (implicitly shown) serves to\u2026", choices: ["increase polymerase processivity on DNA", "remove RNA primers faster", "unwind DNA faster than helicase", "detect mismatches post\u2011replication"], a: 0, exp: "By tethering polymerase to DNA, the sliding clamp enables long continuous synthesis. This boosts speed and reduces dissociation." },
        { q: "Which direction do bacterial replication forks travel from the ori?", choices: ["Unidirectionally", "Bidirectionally around the chromosome", "Only clockwise", "Only counterclockwise"], a: 1, exp: "Two forks move in opposite directions, meeting roughly opposite the origin. This is a hallmark of bacterial replication." },
        { q: "Which statement about heterochromatin is consistent with the slides?", choices: ["It is loosely packed and highly transcribed", "It is tightly packed and generally transcriptionally silent", "It occurs only in bacteria", "It is made of RNA only"], a: 1, exp: "Condensed heterochromatin restricts access of polymerases and regulators, reducing gene expression. Euchromatin is less compact and more active." },
    ]
}
,
{
  key: "W8_Ch14_Part3_DNA",
  label: "W8 Lecture11 Ch14 Part 3 – Telomeres & DNA Repair",
  questions: [
    {
      q: "Why does the end‑replication problem cause telomere shortening?",
      choices: ["helicase removes terminal nucleotides", "there is no template to replace the final 5′ RNA primer on the lagging strand", "leading strand stops early", "ligase skips the last nick"],
      a: 1,
      exp: "After primer removal at the extreme 5′ end, DNA cannot be filled in; the end shortens."
    },
    {
      q: "Human telomeres are composed of repeats of…",
      choices: ["AUGGGU", "TTAGGG", "CCCTAA only once", "poly‑A tails"],
      a: 1,
      exp: "Humans have many TTAGGG repeats at chromosome ends."
    },
    {
      q: "Telomerase is best described as…",
      choices: ["a DNA‑only polymerase", "a ribonucleoprotein that uses its RNA template to extend 3′ ends", "a helicase", "a ligase"],
      a: 1,
      exp: "Telomerase carries an RNA template to add repeats to 3′ ends."
    },
    {
      q: "Most human somatic cells have…",
      choices: ["high telomerase activity and unlimited division", "little to no telomerase; telomeres shorten with age", "no telomeres", "linear chromosomes that lengthen each division without enzymes"],
      a: 1,
      exp: "Limited telomerase leads to progressive shortening and replicative limits."
    },
    {
      q: "Cancer cells commonly…",
      choices: ["inactivate telomerase completely", "reactivate telomerase or alternative lengthening pathways", "lose all telomeres and die immediately", "switch to circular chromosomes"],
      a: 1,
      exp: "Many cancers upregulate telomerase to maintain telomeres."
    },
    {
      q: "DNA polymerase proofreading refers to…",
      choices: ["5′→3′ exonuclease removal of bases", "3′→5′ exonuclease removal of misincorporated bases", "RNA primer removal", "thymine dimer excision"],
      a: 1,
      exp: "Replicative polymerases can backtrack and excise mispairs via 3′→5′ exonuclease activity."
    },
    {
      q: "Mismatch repair (MMR) primarily fixes…",
      choices: ["UV‑induced thymine dimers", "mispaired bases that escaped proofreading", "double‑strand breaks", "depurination only"],
      a: 1,
      exp: "MMR scans for mismatches shortly after replication and corrects them."
    },
    {
      q: "Nucleotide excision repair (NER) is critical for removing…",
      choices: ["uracil from DNA after deamination", "bulky lesions like UV‑induced thymine dimers", "alkylated bases only", "Okazaki fragments"],
      a: 1,
      exp: "NER excises a short oligonucleotide containing the lesion and refills the gap."
    },
    {
      q: "In NER, after the damaged strand segment is removed…",
      choices: ["RNA polymerase inserts ribonucleotides", "DNA polymerase fills the gap and ligase seals it", "helicase deletes the other strand", "nothing further occurs"],
      a: 1,
      exp: "DNA pol fills using the intact strand as template, and ligase seals the nick."
    },
    {
      q: "Which statement about telomere biology is TRUE?",
      choices: ["telomeres code for essential proteins", "their repeats primarily protect coding DNA from erosion", "they are transcribed as tRNAs", "they are centromeres"],
      a: 1,
      exp: "Telomeres buffer the ends so coding regions are preserved."
    },
    {
      q: "Elizabeth Blackburn’s work clarified…",
      choices: ["mechanism of telomerase action on chromosome ends", "ribosome structure", "DNA ligase function", "Okazaki fragment discovery"],
      a: 0,
      exp: "Blackburn (with Greider & Szostak) elucidated telomerase and telomere maintenance."
    },
    {
      q: "A hallmark of defective NER in humans is…",
      choices: ["xeroderma pigmentosum sensitivity to UV", "sickle‑cell disease", "Down syndrome", "color blindness"],
      a: 0,
      exp: "Defective NER causes extreme UV sensitivity (e.g., xeroderma pigmentosum)."
    },
    {
      q: "Proofreading, MMR, and NER act at different times. Which is earliest?",
      choices: ["NER during S phase", "MMR immediately after replication", "Proofreading during polymerization", "All occur before replication"],
      a: 2,
      exp: "Proofreading happens as polymerase incorporates nucleotides; MMR follows; NER can act anytime."
    },
    {
      q: "Which best explains why telomerase extends the 3′ end first?",
      choices: ["polymerases only extend 5′ ends", "the enzyme uses a built‑in RNA template to add DNA to the free 3′‑OH", "ligase requires a 3′ overhang", "Okazaki fragments form only at ends"],
      a: 1,
      exp: "Telomerase is a reverse transcriptase that adds DNA onto the existing 3′ end."
    },
    {
      q: "After telomerase extends the 3′ overhang, how is the complementary strand completed?",
      choices: ["RNA polymerase fills it directly", "DNA polymerase synthesizes complementary DNA using a primer, then ligase seals", "no complementary strand is needed", "helicase anneals the strands"],
      a: 1,
      exp: "Extension creates template for conventional DNA polymerase and ligase to finish the end."
    },
        { q: "Which strand at a chromosome end is most affected by the end\u2011replication problem?", choices: ["Leading strand", "Lagging strand", "Both equally at the same position", "Neither strand"], a: 1, exp: "Removal of the last RNA primer on the lagging end leaves a gap with no upstream 3\u2032\u2011OH for fill\u2011in. This leads to progressive shortening without telomerase." },
        { q: "Human telomeric DNA is composed of many repeats of\u2026", choices: ["TATAAA", "TTAGGG", "CCGGCC", "GATCGA"], a: 1, exp: "The six\u2011base repeat TTAGGG is reiterated hundreds to thousands of times. These noncoding repeats buffer the erosion of chromosome ends." },
        { q: "Telomerase extends chromosome ends by\u2026", choices: ["copying a DNA template strand in the 3\u2032\u21925\u2032 direction", "using its internal RNA to add repeats to the 3\u2032 overhang", "sealing nicks between fragments", "cutting back damaged ends only"], a: 1, exp: "Telomerase is a ribonucleoprotein that anneals its RNA to the 3\u2032 overhang and synthesizes repeats. Conventional polymerases then synthesize the complementary strand." },
        { q: "Most human somatic cells exhibit what telomerase activity?", choices: ["High", "Low or none", "Random spikes every hour", "Constitutive maximal activity"], a: 1, exp: "Telomerase is largely inactive in somatic cells, so telomeres shorten over divisions. Stem and many cancer cells maintain higher activity." },
        { q: "What happens after telomerase extends the 3\u2032 overhang sufficiently?", choices: ["RNA polymerase fills the gap", "A DNA polymerase synthesizes the complementary strand and ligase seals the nick", "Topoisomerase extends the 5\u2032 end", "Nothing further is needed"], a: 1, exp: "Extension of the 3\u2032 end allows a conventional DNA polymerase to copy the opposite strand. Ligase then restores backbone continuity." },
        { q: "Which DNA repair pathway corrects mismatches that escape proofreading?", choices: ["Base excision repair", "Mismatch repair (MMR)", "Nucleotide excision repair (NER)", "Non\u2011homologous end joining only"], a: 1, exp: "MMR detects mispaired bases after replication and replaces the error\u2011containing stretch. This boosts overall fidelity beyond proofreading." },
        { q: "NER is specialized to remove which lesions?", choices: ["Small base modifications only", "Bulky helix\u2011distorting lesions such as UV\u2011induced thymine dimers", "Double\u2011strand breaks only", "RNA primers"], a: 1, exp: "Nucleotide excision repair recognizes distortions and excises an oligonucleotide segment containing the lesion. DNA polymerase and ligase then restore sequence and continuity." },
        { q: "A well\u2011known human disease linked to NER defects is\u2026", choices: ["Xeroderma pigmentosum with UV sensitivity", "Cystic fibrosis", "Sickle\u2011cell disease", "Hemophilia"], a: 0, exp: "In xeroderma pigmentosum, NER fails to remove UV\u2011induced lesions efficiently. Patients are extremely sensitive to sunlight and prone to skin cancers." },
        { q: "Proofreading by replicative polymerases relies on which activity?", choices: ["3\u2032\u21925\u2032 exonuclease", "5\u2032\u21923\u2032 exonuclease", "Endonuclease", "Transglycosylase"], a: 0, exp: "The enzyme transfers the newly added base to an exonuclease site to excise mismatches. This near\u2011real\u2011time correction greatly reduces error rates." },
        { q: "Why do telomeres consist of noncoding repeats rather than essential genes?", choices: ["Repeats help recruit histones only", "Losing repeats protects coding regions from loss during repeated divisions", "Repeats make replication faster", "Genes cannot exist near ends"], a: 1, exp: "Because the terminal gap cannot be filled without telomerase, ends erode. Using sacrificial repeats ensures genes are not immediately lost." },
        { q: "Cancer biology often involves telomerase because\u2026", choices: ["Cancer cells lack DNA repair entirely", "Many tumors reactivate telomerase to sustain unlimited proliferation", "Telomerase directly fixes double\u2011strand breaks", "High telomerase always lengthens lifespan"], a: 1, exp: "Reactivation of telomerase stabilizes telomeres, bypassing replicative limits. This is one mechanism enabling continued cell division in cancers." },
        { q: "Which concise sequence summarizes MMR steps shown in the slides?", choices: ["Detect \u2192 excise \u2192 fill \u2192 ligate", "Excise \u2192 detect \u2192 ligate \u2192 fill", "Ligate \u2192 detect \u2192 fill \u2192 excise", "Fill \u2192 excise \u2192 ligate \u2192 detect"], a: 0, exp: "Mismatch repair proteins recognize the error, remove the segment containing it, synthesize the correct DNA, and seal the backbone. This sequence restores duplex accuracy." },
        { q: "UV irradiation leads to what specific DNA change addressed by NER?", choices: ["Purine depurination", "Cyclobutane thymine dimer formation between adjacent thymines", "Spontaneous deamination of 5\u2011methylcytosine", "Alkylation of adenine only"], a: 1, exp: "Adjacent thymines form covalent dimers that distort the helix and block polymerases. NER removes the damaged section to recover a normal duplex." },
        { q: "Telomerase is classified as what type of enzyme complex?", choices: ["Pure protein enzyme", "Ribonucleoprotein with catalytic protein and internal RNA template", "Ribosome", "Topoisomerase"], a: 1, exp: "The protein component catalyzes DNA synthesis while the RNA component serves as the template. This dual composition is central to its mechanism." },
        { q: "In cells without telomerase, continued divisions eventually trigger\u2026", choices: ["Unlimited growth", "Senescence or apoptosis when telomeres become critically short", "Immediate DNA repair of all ends", "Chromosome circularization in all cells"], a: 1, exp: "As buffers are exhausted, chromosome ends are sensed as damage, activating checkpoints. Cells stop dividing or undergo programmed death to maintain genomic integrity." },

  ]
},
  {
    key: "W9_Ch15_Part1_GenesProteins",
    label: "W9 Lecture16 Ch15 Part 1 – Flow of Genetic Information",
    questions: [
      { q: "What does the central dogma describe in cells?", choices: ["Protein → RNA → DNA", "DNA → RNA → Protein", "RNA → DNA → Protein", "Protein → DNA → RNA"], a: 1, exp: "The central dogma summarizes the directional flow of information from DNA to RNA (transcription) and from RNA to protein (translation). It captures the typical pathway by which genotype becomes phenotype." },
      { q: "Which enzyme transcribes DNA into mRNA according to the slides?", choices: ["DNA polymerase", "RNA polymerase", "Ribosome", "Ligase"], a: 1, exp: "RNA polymerase builds an RNA strand that is complementary to the DNA template. This is the first step in expressing a gene." },
      { q: "Which cellular machine translates mRNA into protein?", choices: ["RNA polymerase", "Spliceosome", "Ribosome", "Topoisomerase"], a: 2, exp: "Ribosomes read codons on mRNA and assemble amino acids into a polypeptide chain. This decoding uses tRNAs as adaptors between nucleotides and amino acids." },
      { q: "How many nucleotides make up one codon?", choices: ["1", "2", "3", "4"], a: 2, exp: "The genetic code is read in non‑overlapping triplets called codons. Each codon specifies an amino acid or a translational signal." },
      { q: "What does the term 'reading frame' mean?", choices: ["Which ribosome is used", "Which nucleotide starts the first codon triplet", "Which strand is transcribed", "Which amino acid begins the polypeptide"], a: 1, exp: "The reading frame is set by the start position and determines how triplets are grouped. Shifting the frame changes every codon downstream." },
      { q: "Inserting or deleting one or two nucleotides typically causes a:", choices: ["Silent mutation", "Frameshift mutation", "Synonymous change only", "No change"], a: 1, exp: "A frameshift alters the grouping of codons, often producing a nonfunctional protein. The slides emphasize the disruptive nature of 1‑ or 2‑nt indels on the message." },
      { q: "How many possible codons exist in the genetic code?", choices: ["20", "61", "64", "3"], a: 2, exp: "There are 64 triplet combinations: 61 sense codons for amino acids and 3 stop codons. This redundancy underlies degeneracy of the code." },
      { q: "Which term best describes the fact that most amino acids are encoded by multiple codons?", choices: ["Ambiguity", "Degeneracy", "Polarity", "Monosomy"], a: 1, exp: "Degeneracy means more than one codon can specify the same amino acid. This can buffer the impact of some point mutations on protein sequence." },
      { q: "Which codon is the canonical start for translation in eukaryotes?", choices: ["UAA", "UGA", "UAG", "AUG"], a: 3, exp: "AUG codes for methionine and typically sets the reading frame at the beginning of translation. Start selection is crucial for producing the correct protein." },
      { q: "Which codons function as stops (nonsense codons)?", choices: ["UAA, UAG, UGA", "AUG, UGG, UGA", "UAA, AUG, UAG", "AAA, AAG, AGA"], a: 0, exp: "UAA, UAG, and UGA signal termination and release of the polypeptide. They do not specify amino acids in standard nuclear code usage." },
      { q: "Why is the genetic code described as nearly universal?", choices: ["It varies widely across species", "Almost all species use the same codon assignments", "Only bacteria share the same code", "Plants use a 2‑letter code"], a: 1, exp: "With few organelle‑specific exceptions, organisms interpret codons similarly. This universality allows mRNA from one species to be translated by another in experimental contexts." },
      { q: "The coding strand of DNA has a sequence similar to mRNA except that it contains:", choices: ["G instead of C", "T instead of U", "U instead of T", "C instead of G"], a: 1, exp: "mRNA matches the coding (nontemplate) DNA strand except uracil replaces thymine. The template strand is complementary to the mRNA." },
      { q: "Protein structure ultimately depends on:", choices: ["Codon wobble only", "The order of amino acids specified by mRNA", "Nuclear envelope composition", "Ribosomal size alone"], a: 1, exp: "The linear amino acid sequence folds into functional 3D structures. That sequence is determined by the mRNA codons translated during protein synthesis." },
      { q: "What immediate consequence can a frameshift have on translation?", choices: ["Increases translation fidelity", "Creates premature stop codons and truncates proteins", "Guarantees same protein length", "Improves enzyme activity"], a: 1, exp: "Frameshifts misread downstream triplets, often introducing early termination signals. The resulting truncated polypeptides are usually nonfunctional." },
      { q: "A 'degenerate code' helps cells by:", choices: ["Ensuring every mutation is lethal", "Reducing the impact of certain base substitutions on amino acid sequence", "Eliminating the need for tRNA", "Replacing start/stop signals"], a: 1, exp: "Because multiple codons can specify the same amino acid, some point mutations are synonymous. This mitigates the phenotypic consequences of random errors." },
      { q: "If AUG sets the frame, changing the first A to C would most likely:", choices: ["Start at CUG without effect", "Prevent normal initiation and alter the reading frame", "Make a longer protein always", "Have no possible impact"], a: 1, exp: "Loss of the canonical start codon generally prevents correct initiation. The ribosome may fail to start or start at a downstream AUG, changing the N‑terminus." },
      { q: "Ribosomes 'read' mRNA in which direction?", choices: ["3′→5′", "5′→3′", "Both simultaneously", "Direction is random"], a: 1, exp: "Translation proceeds 5′→3′ along the mRNA. Amino acids are added to the C‑terminus of the growing polypeptide." },
      { q: "Why does a three‑letter code make biological sense compared to a two‑letter code?", choices: ["Two letters give enough codons for 20 amino acids", "Three letters yield at least 20 unique combinations", "Four letters cannot be read by ribosomes", "Triplets are easier to polymerize"], a: 1, exp: "A two‑letter code would only give 16 combinations (4²), which is not enough. Triplets provide 64 possibilities, accommodating all amino acids plus stops." },
      { q: "Which statement about mRNA is correct from the slides?", choices: ["It is double‑stranded in the cytosol", "It is single‑stranded and carries codons", "It is identical to tRNA", "It stays in the nucleus in prokaryotes"], a: 1, exp: "mRNA is a single‑stranded transcript carrying codons that specify amino acids. In prokaryotes it is translated directly; in eukaryotes it is processed and exported." },
      { q: "How do amino acids influence protein function, as noted in the slides?", choices: ["Only by their number", "Side‑chain chemistry influences 3D folding and activity", "They do not affect structure", "Only glycine matters"], a: 1, exp: "Different side chains cause distinctive folding patterns and interactions. This structural outcome defines protein function." },
      { q: "Which best describes 'degenerate but unambiguous' for the code?", choices: ["A codon can specify many amino acids", "An amino acid can be encoded by multiple codons, but each codon corresponds to only one amino acid", "Codons are random", "Each amino acid has one codon only"], a: 1, exp: "Degeneracy allows multiple codons per amino acid, yet codons are unambiguous because each codon maps to a single meaning. This precision ensures proper decoding during translation." },
      { q: "What sets the reading frame at the beginning of translation?", choices: ["Stop codons", "Promoters", "The first AUG in an appropriate context", "Poly‑A tail"], a: 2, exp: "The initiating AUG defines how triplets will be partitioned. Start‑site selection is a key control point for correct protein synthesis." },
      { q: "What is the relationship between template DNA and mRNA?", choices: ["They are identical sequences", "They are complementary and antiparallel", "They are parallel and identical except U for T", "They share only stop codons"], a: 1, exp: "RNA polymerase reads the template in 3′→5′ to synthesize mRNA 5′→3′. This produces a complementary, antiparallel RNA copy of the template information." },
      { q: "Why are stop codons called 'nonsense' codons?", choices: ["They encode rare amino acids", "They encode punctuation to start a new gene", "They do not specify an amino acid and trigger release", "They reverse translation direction"], a: 2, exp: "Stop codons recruit release factors rather than tRNAs. This ends polypeptide elongation at the proper site." },
      { q: "If one nucleotide is added near the start of a coding sequence, the outcome is most likely:", choices: ["Silent because of degeneracy", "Frameshift altering nearly all downstream amino acids", "Extension of protein by one residue", "No change in length"], a: 1, exp: "An early frameshift miscodes nearly the entire protein and often introduces premature stops. Functional proteins rarely tolerate such changes." },
      { q: "Why can purified mRNA from one species direct protein synthesis in another as noted in the slides?", choices: ["Species share identical ribosomes", "The genetic code is nearly universal across life", "All organisms use the same tRNA pool", "All mRNAs are the same length"], a: 1, exp: "Because codon assignments are conserved, foreign mRNAs can be translated by another species’ machinery. This principle underlies many recombinant expression systems." },
      { q: "What is a codon table used for in practice?", choices: ["Designing promoters", "Mapping mRNA triplets to amino acids or stops", "Counting exons", "Measuring tRNA length"], a: 1, exp: "Codon tables decode mRNA sequences into their corresponding amino acids. They are a standard reference for translation." },
      { q: "Which role does tRNA play during translation?", choices: ["Catalyzes mRNA synthesis", "Matches anticodon to codon and carries the correct amino acid", "Removes introns from RNA", "Adds poly‑A tails"], a: 1, exp: "tRNAs are adaptors that pair their anticodons with mRNA codons while delivering specific amino acids. This ensures correct sequence assembly." },
      { q: "What happens to the polypeptide at a stop codon?", choices: ["A special tRNA inserts selenocysteine by default", "Release factors promote hydrolysis and release of the chain", "Ribosome reverses to find another AUG", "RNA polymerase finishes elongation"], a: 1, exp: "Protein factors recognize stop codons and catalyze peptidyl‑tRNA hydrolysis. The completed polypeptide is freed for folding and processing." },
      { q: "Why is the concept 'DNA → RNA → Protein' still taught despite exceptions?", choices: ["It has no exceptions", "It concisely models the predominant information flow in cells", "It excludes viruses", "It denies reverse transcription"], a: 1, exp: "While exceptions like reverse transcription exist, the model captures core gene expression for most cellular genes. It remains a foundational learning framework." }
    ]
  },
  {
    key: "W9_Ch15_Part2_Transcription_Prok",
    label: "W9 Lecture16 Ch15 Part 2 – Transcription (Prokaryotes)",
    questions: [
      { q: "Where does transcription occur in bacteria?", choices: ["Nucleus", "Cytoplasm", "Mitochondria", "Endoplasmic reticulum"], a: 1, exp: "Prokaryotes lack a membrane‑bound nucleus, so transcription occurs in the cytoplasm. This proximity enables rapid coupling to translation." },
      { q: "What is a transcription bubble?", choices: ["A vesicle carrying RNA", "A region of unwound DNA where RNA synthesis occurs", "A ribosomal subunit", "A hairpin in mRNA"], a: 1, exp: "RNA polymerase locally unwinds DNA to expose the template. This open complex is the site of nucleotide addition." },
      { q: "What role do promoters play in transcription initiation?", choices: ["They encode tRNA", "They are DNA sequences upstream where RNA polymerase binds to start", "They are mRNA caps", "They are protein enhancers only"], a: 1, exp: "Promoters position RNA polymerase at the correct start site. In bacteria, consensus motifs at −10 and −35 are recognized by σ factor." },
      { q: "Which bacterial polymerase subunit recognizes −10/−35 promoter elements?", choices: ["β′ subunit", "σ (sigma) subunit", "α subunit", "ω subunit"], a: 1, exp: "The σ subunit binds promoter consensus sequences and helps form the initiation complex. After initiation, σ typically dissociates from the core enzyme." },
      { q: "What is the +1 site in transcription?", choices: ["First nucleotide of the promoter", "First transcribed nucleotide of the mRNA", "First codon of translation", "First intron boundary"], a: 1, exp: "The +1 position marks the start of the RNA transcript. Positions upstream are negative, and downstream are positive." },
      { q: "During elongation, in which direction is RNA synthesized?", choices: ["3′→5′", "5′→3′", "Both directions", "Direction is random"], a: 1, exp: "NTPs are added to the 3′ end, so the RNA chain grows 5′→3′. The polymerase simultaneously unwinds ahead and rewinds behind." },
      { q: "What happens to the σ subunit after initiation has begun?", choices: ["It stays permanently bound", "It dissociates from the core enzyme", "It becomes the β subunit", "It caps the mRNA"], a: 1, exp: "σ factor often leaves after promoter clearance so the core polymerase can proceed efficiently. It can be reused for other initiation events." },
      { q: "Which mechanism is NOT a bacterial transcription termination mode?", choices: ["Rho‑dependent termination", "Rho‑independent termination (intrinsic)", "Spliceosome‑dependent termination", "Hairpin formation in RNA"], a: 2, exp: "Spliceosomes are eukaryotic RNA‑processing complexes, not prokaryotic termination factors. Bacteria terminate via Rho protein or intrinsic hairpins followed by U‑tracts." },
      { q: "Rho protein terminates transcription by:", choices: ["Binding the promoter", "Tracking along RNA to catch up to RNA polymerase and dislodge it", "Cutting DNA at −10", "Adding a poly‑A tail"], a: 1, exp: "Rho is an RNA helicase that uses ATP to disrupt the transcription complex. Its action releases the nascent RNA." },
      { q: "Intrinsic (Rho‑independent) termination involves:", choices: ["σ factor binding to UAA codons", "A GC‑rich hairpin followed by a U‑rich run", "A poly‑A tail", "Splice sites"], a: 1, exp: "A stable hairpin in the transcript followed by weak rU–dA base pairs causes the polymerase to pause and dissociate. This ends transcription without Rho." },
      { q: "Why can transcription and translation be coupled in bacteria?", choices: ["mRNA is exported through nuclear pores", "There is no nucleus, so ribosomes can bind as RNA is made", "Ribosomes are inside the nucleus", "tRNA is absent"], a: 1, exp: "The absence of a nuclear envelope allows ribosomes to initiate on nascent mRNA. This produces proteins quickly when needed." },
      { q: "Multiple RNA polymerases can transcribe the same gene simultaneously. The advantage is:", choices: ["Lower mRNA yield", "Rapid, high‑level protein production", "Fewer ribosomes required", "Longer mRNAs"], a: 1, exp: "Stacking polymerases boosts transcript output. With concurrent translation, protein levels rise rapidly." },
      { q: "The 'initiation site' is defined as:", choices: ["−35 element", "Start of translation", "First transcribed nucleotide (+1)", "Splice donor site"], a: 2, exp: "The +1 site in DNA coordinates where RNA synthesis begins. It is distinct from the start codon for translation." },
      { q: "Which direction terms relate to the +1 position?", choices: ["Upstream and downstream around the promoter", "Inside and outside the nucleus", "N‑terminal and C‑terminal", "Leading and lagging"], a: 0, exp: "Upstream nucleotides have negative numbers, downstream have positive numbers. This coordinate system anchors promoter diagrams." },
      { q: "Which of the following is TRUE for bacterial mRNAs per the slides?", choices: ["They are usually monocistronic", "They can be polycistronic and encode multiple proteins", "They are capped and polyadenylated extensively", "They are spliced like eukaryotic pre‑mRNAs"], a: 1, exp: "Many bacterial transcripts are polycistronic, allowing coordinated expression of operons. They generally lack 5′ caps and do not undergo intron splicing." },
      { q: "What best describes the bacterial promoter elements noted in the slides?", choices: ["TATA box at −30 only", "Consensus sequences around −10 and −35", "Shine‑Dalgarno at −25", "Poly‑U tract at −80"], a: 1, exp: "σ factor recognizes consensus motifs near −10 and −35. Their spacing and sequence affect promoter strength." },
      { q: "Elongation rate cited in the slides is approximately:", choices: ["4 nt/s", "40 nt/s", "400 nt/s", "4000 nt/s"], a: 1, exp: "The lecture notes state an elongation rate of about 40 nucleotides per second. Rates can vary with conditions and genes." },
      { q: "Why is promoter recognition by σ important?", choices: ["It increases splicing efficiency", "It ensures transcription begins at appropriate sites", "It adds a 5′ cap", "It polyadenylates mRNA"], a: 1, exp: "Accurate initiation determines correct RNA sequences and expression levels. Without σ guidance, core polymerase binds nonspecifically." },
      { q: "What happens at a hairpin terminator?", choices: ["Ribosomes stall and initiate", "RNA folds into a stem‑loop that destabilizes the RNA–DNA hybrid", "DNA breaks irreversibly", "σ factor reassociates"], a: 1, exp: "The GC‑rich stem‑loop induces pausing, and the following U‑rich region weakens hybrid pairing. This promotes release of the transcript." },
      { q: "Which is FALSE about bacterial transcription from the slides?", choices: ["It occurs in the cytoplasm", "It requires spliceosomes", "It uses σ factor for initiation", "It can be coupled to translation"], a: 1, exp: "Spliceosomes are not part of prokaryotic transcription. Bacteria do not splice introns in typical mRNAs." },
      { q: "Polycistronic mRNAs often arise from:", choices: ["Monomeric promoters only", "Operons containing multiple coding sequences", "Eukaryotic alternative splicing", "Poly‑A site choice"], a: 1, exp: "Operons yield transcripts encoding several proteins that function together. This arrangement enables co‑regulation." },
      { q: "What is the functional outcome of Rho catching up to RNA polymerase?", choices: ["Start codon recognition", "Transcription termination by complex dissociation", "tRNA charging", "mRNA capping"], a: 1, exp: "Rho uses ATP to translocate along RNA and disassemble the transcription complex. The RNA is then released from the DNA template." },
      { q: "Which event follows promoter clearance?", choices: ["σ remains bound tightly", "Core enzyme proceeds with elongation and σ is released", "Translation begins in the nucleus", "Polyadenylation of bacterial mRNA"], a: 1, exp: "After initiation, the core polymerase moves downstream to elongate. σ is free to assist another initiation event." },
      { q: "A bacterial gene being transcribed by several polymerases and translated by many ribosomes illustrates:", choices: ["Gene silencing", "Efficient amplification of protein production", "RNA interference", "Nuclear export defects"], a: 1, exp: "This arrangement allows quick buildup of protein concentration. It is a classic textbook depiction of prokaryotic expression." },
      { q: "Which best distinguishes initiation vs elongation?", choices: ["Initiation happens at +1 and requires promoter recognition; elongation extends RNA after promoter clearance", "Initiation uses ribosomes; elongation uses RNA polymerase", "Initiation splices introns; elongation caps RNA", "They are identical phases"], a: 0, exp: "Initiation positions the polymerase at the correct site and starts RNA synthesis. Elongation then continues nucleotide addition along the template." },
      { q: "Which statement about the coding strand is correct in transcription diagrams?", choices: ["It is transcribed directly by RNA polymerase", "It has the same sequence as RNA except T for U", "It base‑pairs with ribosomes", "It is always the bottom strand"], a: 1, exp: "The coding (nontemplate) strand mirrors the RNA sequence with thymine instead of uracil. The template strand is the one actually read by the polymerase." },
      { q: "What consequence can arise if a promoter’s −10/−35 elements deviate strongly from consensus?", choices: ["Higher σ binding and stronger initiation", "Weaker σ recognition and reduced transcription", "Immediate translation", "Constitutive termination"], a: 1, exp: "Promoter strength correlates with similarity to consensus motifs. Deviations tend to reduce initiation frequency." },
      { q: "What is meant by 'upstream' of +1?", choices: ["Toward more positive numbers", "Toward more negative coordinates (5′ of the start site)", "Toward the stop codon", "Toward the poly‑A site"], a: 1, exp: "Upstream sequences lie before the start site and often contain regulatory motifs. This orientation is standard in promoter maps." },
      { q: "During transcription, which base is incorporated opposite template adenine in RNA?", choices: ["T", "A", "U", "C"], a: 2, exp: "Uracil substitutes for thymine in RNA. Base‑pairing rules otherwise mirror those of DNA." }
    ]
  },
  {
    key: "W9_Ch15_Part3_Transcription_Euk",
    label: "W9 Lecture16 Ch15 Part 3 – Transcription (Eukaryotes) & RNA Processing",
    questions: [
      { q: "Where does transcription occur in eukaryotic cells?", choices: ["Cytoplasm", "Nucleus", "Mitochondrial intermembrane space", "Chloroplast stroma only"], a: 1, exp: "Eukaryotic transcription is nuclear; RNA must be processed and exported before translation. This compartmentalization separates transcription from translation." },
      { q: "Which RNA polymerase transcribes most protein‑coding genes in eukaryotes?", choices: ["RNA polymerase I", "RNA polymerase II", "RNA polymerase III", "Reverse transcriptase"], a: 1, exp: "RNA polymerase II synthesizes pre‑mRNA from protein‑coding loci. Other polymerases focus on rRNA and tRNA/snRNA genes." },
      { q: "RNA polymerase I primarily transcribes:", choices: ["mRNA", "rRNA genes", "tRNA genes only", "microRNAs only"], a: 1, exp: "Pol I produces large rRNA precursors in the nucleolus. These are processed and assembled into ribosomes." },
      { q: "RNA polymerase III primarily transcribes:", choices: ["snRNAs, tRNAs, and 5S rRNA", "mRNA", "mitochondrial mRNA", "All rRNAs"], a: 0, exp: "Pol III handles several small structural RNAs including tRNAs, 5S rRNA, and some snRNAs. These RNAs are essential for translation and processing." },
      { q: "Transcription factors (TFs) function to:", choices: ["Replicate DNA", "Help RNA Pol II recognize promoters and form the initiation complex", "Splice pre‑mRNA", "Translate mRNA"], a: 1, exp: "General TFs bind promoter elements (like the TATA box) and recruit Pol II. They are required to correctly position and activate the polymerase." },
      { q: "The TATA box consensus (TATAAA) is typically located:", choices: ["+1 to +6", "−25 to −35 relative to +1", "−1000 to −900", "At the stop codon"], a: 1, exp: "In many promoters, the TATA box sits ~25–35 bases upstream of the transcription start site. It is recognized by TBP within TFIID." },
      { q: "Which statement about the eukaryotic initiation complex is correct?", choices: ["It forms spontaneously without proteins", "It includes Pol II and multiple TFs assembled at the promoter", "It requires ribosomes", "It is identical to bacterial σ holoenzyme"], a: 1, exp: "Pol II is recruited by a suite of general TFs to create a pre‑initiation complex. This assembly positions the polymerase for accurate start." },
      { q: "What is the role of the FACT complex during elongation?", choices: ["Synthesizes RNA primers", "Removes and reassembles histones to allow Pol II passage", "Cuts introns", "Adds the 5′ cap"], a: 1, exp: "FACT (Facilitates Chromatin Transcription) transiently repositions histones ahead of and behind the polymerase. This keeps chromatin organized while allowing transcription to proceed." },
      { q: "Which best summarizes Pol II termination from the slides?", choices: ["Stops exactly at the poly‑A site", "Transcribes 1,000–2,000 nt past the gene and then terminates after RNA processing signals", "Uses Rho helicase", "Cuts at a hairpin only"], a: 1, exp: "Pol II often reads through downstream before cleavage and polyadenylation cues trigger release. The extra transcript is removed during processing." },
      { q: "Unlike bacteria, the initial eukaryotic RNA product is called:", choices: ["mRNA", "pre‑mRNA (primary transcript)", "tRNA", "rRNA"], a: 1, exp: "Pre‑mRNA requires several processing steps before it can be translated. These steps increase mRNA stability and coding accuracy." },
      { q: "Which cap is added to the 5′ end of pre‑mRNA?", choices: ["Poly‑U tail", "5′ methylguanosine cap", "Intron cap", "3′ poly‑A cap"], a: 1, exp: "A 7‑methylguanosine cap is added co‑transcriptionally to the 5′ end. It protects RNA and assists in ribosome recruitment." },
      { q: "What is added to the 3′ end of many eukaryotic mRNAs?", choices: ["5′ cap", "Poly‑A tail", "C‑terminal peptide", "Sigma factor"], a: 1, exp: "Polyadenylation increases stability and influences nuclear export and translation. The tail length can affect mRNA half‑life." },
      { q: "Which sequences are removed during splicing?", choices: ["Exons", "Introns", "Promoters", "Enhancers"], a: 1, exp: "Introns are noncoding intervening sequences that must be excised. Exons are expressed regions that remain in the mature mRNA." },
      { q: "What catalyzes the splicing reaction in the nucleus?", choices: ["Ribosomes", "Spliceosomes composed of proteins and snRNAs", "DNA polymerase", "Release factors"], a: 1, exp: "Spliceosomes contain snRNPs that recognize splice sites and perform transesterification. The complex ensures precise intron removal." },
      { q: "What dinucleotide consensus is commonly found at intron boundaries?", choices: ["AA...TT", "GU at 5′ and AG at 3′", "CG at 5′ and GC at 3′", "UC at 5′ and CU at 3′"], a: 1, exp: "The GU–AG rule is a hallmark of most introns. Accessory signals like branch point and polypyrimidine tract are also involved." },
      { q: "How do the 5′ cap and 3′ poly‑A tail affect mRNA?", choices: ["They decrease stability", "They increase stability and help translation initiation", "They block nuclear export", "They substitute for promoters"], a: 1, exp: "Capping and polyadenylation protect RNA from degradation and assist ribosome binding. These modifications extend mRNA half‑life compared with prokaryotic RNAs." },
      { q: "Eukaryotic transcription and translation are separated because:", choices: ["Ribosomes are absent", "The nuclear envelope separates the nucleus and cytoplasm", "mRNA is not exported", "tRNA is nuclear"], a: 1, exp: "Transcription occurs in the nucleus and translation in the cytoplasm. This spatial separation permits extensive RNA processing before translation." },
      { q: "Which statement about mRNA half‑life is supported by the slides?", choices: ["Prokaryotic mRNAs live for hours; eukaryotic for seconds", "Eukaryotic mRNAs typically last hours; many bacterial mRNAs are short‑lived", "Both last for days", "Neither is stable"], a: 1, exp: "The 5′ cap and 3′ poly‑A tail contribute to longer half‑lives in eukaryotes. Bacterial mRNAs often turn over rapidly to adapt quickly." },
      { q: "Pre‑mRNA splicing produces:", choices: ["A continuous coding sequence where exons are joined", "Introns placed between exons", "A polycistronic message", "An mRNA that cannot be exported"], a: 0, exp: "Splicing connects exons to create the final open reading frame. The mature mRNA is then competent for export and translation." },
      { q: "What is the relationship between snRNAs and spliceosomes?", choices: ["snRNAs are degraded by spliceosomes", "snRNAs are integral RNA components that guide splicing", "snRNAs are only cytosolic", "snRNAs are mitochondrial tRNAs"], a: 1, exp: "snRNAs base‑pair with splice sites and help catalyze the splicing chemistry. They are part of snRNPs within the spliceosome." },
      { q: "Which event would most directly reduce nuclear pre‑mRNA stability?", choices: ["Loss of poly‑A polymerase", "Loss of sigma factor", "Increased tRNA charging", "Increased rRNA processing"], a: 0, exp: "Without polyadenylation, mRNAs would be more rapidly degraded and inefficiently translated. The poly‑A tail is important for RNA fate and function." },
      { q: "What is the effect of the FACT complex on chromatin during transcription?", choices: ["Permanently removes histones", "Temporarily repositions histones to let Pol II pass and then reassembles nucleosomes", "Creates poly‑U tracts", "Caps the mRNA"], a: 1, exp: "FACT maintains chromatin integrity while allowing polymerase progression. This prevents persistent nucleosome loss or collision." },
      { q: "Which processing step does not occur for typical bacterial mRNAs?", choices: ["5′ capping with m7G", "Splicing of introns by spliceosomes", "3′ polyadenylation for long half‑life", "All of the above"], a: 3, exp: "These eukaryotic processing steps are generally absent in bacteria. Bacterial RNAs are produced and used rapidly without such modifications." },
      { q: "rRNA genes are processed and assembled where?", choices: ["Cytosol", "Nucleolus", "Golgi", "Lysosome"], a: 1, exp: "The nucleolus is the ribosome factory in eukaryotic nuclei. rRNAs are transcribed and assembled with proteins there." },
      { q: "tRNA processing includes:", choices: ["Addition of amino acids in the nucleus only", "Trimming and modification followed by cytoplasmic aminoacylation", "Translation into proteins", "Export as part of ribosomes"], a: 1, exp: "tRNAs are processed in the nucleus and then charged with amino acids in the cytoplasm. Charged tRNAs are essential substrates for translation." },
      { q: "Which statement best distinguishes prokaryotic vs eukaryotic transcription from the slides?", choices: ["Both occur in the cytoplasm", "Prokaryotes: cytoplasmic and often polycistronic; Eukaryotes: nuclear with extensive RNA processing", "Prokaryotes: require spliceosomes; Eukaryotes: no processing", "Eukaryotes: use σ factor"], a: 1, exp: "The lecture contrasts cytoplasmic, coupled expression in bacteria with nuclear transcription and processing in eukaryotes. These differences shape gene regulation strategies." },
      { q: "What would a mutation destroying a TATA box most likely do?", choices: ["Increase transcription dramatically", "Reduce Pol II recruitment and transcription initiation", "Cause polycistrony", "Activate Rho"], a: 1, exp: "Disrupting core promoter elements impairs pre‑initiation complex formation. As a result, transcription levels fall." },
      { q: "Which feature is part of cleavage and polyadenylation?", choices: ["Rho helicase", "CPSF and CstF recognizing RNA signals downstream of the coding region", "Sigma factor", "Shine‑Dalgarno sequence"], a: 1, exp: "Cleavage and polyadenylation factors bind sequence elements to process the 3′ end. This step helps define mature mRNA ends and promote stability." },
      { q: "Which is TRUE about eukaryotic mRNA before export?", choices: ["It is identical to the DNA coding strand", "It is capped, spliced, and polyadenylated to form mature mRNA", "It contains introns that enhance translation", "It is translated in the nucleus"], a: 1, exp: "Pre‑mRNA undergoes multiple maturation steps before leaving the nucleus. Only then is it efficiently translated in the cytoplasm." }
    ]
  },
  {
    key: "W9_Ch15_Part4_Translation",
    label: "W9 Lecture16 Ch15 Part 4 – Protein Synthesis (Translation)",
    questions: [      { q: "Protein synthesis decodes…", choices: ["DNA directly into protein", "mRNA into a polypeptide chain via the ribosome", "lipids into carbohydrates", "rRNA into DNA"], a: 1, exp: "Translation uses ribosomes to read mRNA codons and build a polypeptide. This implements the genetic code in the form of amino acid sequences." },
      { q: "A peptide bond forms between…", choices: ["two carboxyl groups", "the carboxyl group of one amino acid and the amino group of another", "two phosphate groups", "two bases in RNA"], a: 1, exp: "Peptide bond formation releases water (condensation). The linkage creates the polypeptide backbone central to protein structure." },
      { q: "Which ribosomal subunit binds mRNA first in initiation?", choices: ["Large subunit", "Small subunit", "Golgi", "Spliceosome"], a: 1, exp: "The small subunit associates with mRNA and initiation factors to scan or position at the start site. The large subunit then joins to form the complete ribosome." },
      { q: "Prokaryotic vs eukaryotic ribosomes are…", choices: ["70S vs 80S (30S+50S vs 40S+60S)", "80S vs 70S", "identical", "protein‑only without rRNA"], a: 0, exp: "Bacterial ribosomes are 70S composed of 30S and 50S; eukaryotic ribosomes are 80S with 40S and 60S subunits. rRNA is a major functional component in both." },
      { q: "The three tRNA binding sites on the ribosome are…", choices: ["X, Y, Z", "A (aminoacyl), P (peptidyl), E (exit)", "D, K, R", "S, L, U"], a: 1, exp: "New aminoacyl‑tRNAs enter at A, the growing chain resides at P where peptide bond forms, and deacylated tRNAs leave via E. The coordinated movement drives elongation." },
      { q: "The start codon is typically…", choices: ["UGA", "UAG", "UAA", "AUG"], a: 3, exp: "AUG encodes methionine and sets the reading frame. Special initiator tRNAs recognize this codon during initiation." },
      { q: "In bacteria, the small subunit recognizes…", choices: ["a 5′ cap", "the Shine–Dalgarno sequence upstream of AUG", "poly‑A tail", "introns"], a: 1, exp: "The SD sequence base‑pairs with 16S rRNA to position the start codon in the P site. Eukaryotes instead use cap‑dependent scanning." },
      { q: "In eukaryotes, initiation commonly involves…", choices: ["direct binding to SD motif", "recognition of the 5′ m7G cap and scanning to the first AUG", "injection of DNA", "Rho helicase"], a: 1, exp: "Eukaryotic initiation factors recruit the small subunit to the capped 5′ end, which scans for an AUG in a good context. This establishes the correct frame." },
      { q: "Aminoacyl‑tRNA synthetases…", choices: ["charge tRNAs with the correct amino acid using ATP → AMP", "form peptide bonds on the small subunit", "translate mRNA sequences", "synthesize rRNA"], a: 0, exp: "Synthetases ensure that each tRNA is linked to its cognate amino acid, using energy from ATP. Accurate charging is crucial for fidelity." },
      { q: "Peptidyl transferase activity is a property of…", choices: ["a protein enzyme in the small subunit", "rRNA in the large subunit (a ribozyme)", "DNA polymerase", "topoisomerase"], a: 1, exp: "The ribosome’s catalytic core is RNA, not protein. This underscores the central role of rRNA in translation." },
      { q: "Elongation adds amino acids to which end of the polypeptide?", choices: ["N‑terminus", "C‑terminus", "both ends alternately", "random end"], a: 1, exp: "The growing chain is transferred to the incoming aminoacyl‑tRNA at the A site, extending the C‑terminus. Directionality is fundamental to translation." },
      { q: "Termination occurs when…", choices: ["the ribosome reaches the poly‑A tail", "a stop codon appears in the A site and release factors bind", "rRNA is fully synthesized", "a hairpin forms in DNA"], a: 1, exp: "Stop codons (UAA, UAG, UGA) are recognized by release factors, not tRNAs. Hydrolysis then frees the completed peptide." },
      { q: "Which is NOT a stop codon?", choices: ["UGA", "UAG", "UAA", "AUG"], a: 3, exp: "AUG is the start codon, encoding methionine. The other three signal translation termination." },
      { q: "During elongation, translocation moves…", choices: ["the ribosome one codon downstream along mRNA", "tRNA from E to A directly", "mRNA upstream", "large subunit to nucleus"], a: 0, exp: "Elongation factor‑guided translocation shifts tRNAs from A→P and P→E while advancing the mRNA by one codon. This cyclical motion drives processivity." },
      { q: "Which statement about wobble is accurate?", choices: ["Each amino acid uses exactly one tRNA", "Some tRNAs can read multiple codons via flexible pairing at the third position", "Wobble occurs at codon position 1 only", "Wobble eliminates the need for synthetases"], a: 1, exp: "Wobble pairing at the third base of a codon allows fewer tRNAs to recognize multiple synonymous codons. It maintains efficiency without compromising fidelity." },
      { q: "Energy cost of peptide bond formation and translocation is largely provided by…", choices: ["ATP only", "GTP hydrolysis by elongation factors, plus prior ATP used in tRNA charging", "no energy input", "NADH"], a: 1, exp: "Aminoacyl‑tRNA formation consumes ATP, and elongation factors use GTP during decoding and translocation. Translation is energetically expensive." },
      { q: "Protein targeting to the endoplasmic reticulum uses…", choices: ["Shine–Dalgarno sequence", "N‑terminal signal peptides and SRP‑mediated docking", "Rho helicase", "nuclear pores only"], a: 1, exp: "Signal peptides are recognized by the signal recognition particle (SRP), pausing translation and directing the ribosome to the ER. The signal is often cleaved after targeting." },
      { q: "Chaperones assist by…", choices: ["forming peptide bonds", "helping polypeptides fold correctly and preventing aggregation", "editing mRNA caps", "transporting DNA into mitochondria"], a: 1, exp: "Chaperones provide a protected environment or ATP‑driven cycles to promote native folding. Proper folding is essential for function." },
      { q: "Which statement about the A, P, and E sites is correct?", choices: ["P is entry site for new tRNA", "A holds the aminoacyl‑tRNA; P holds the peptidyl‑tRNA; E is the exit site", "E performs peptidyl transfer", "A is exit site"], a: 1, exp: "The cycle is A→P→E. Peptide bond formation transfers the chain from P to the amino acid in A." },
      { q: "Initiation in bacteria uses a special tRNA called…", choices: ["tRNAMet (elongator)", "tRNAi^Metf (formyl‑methionine in many bacteria)", "tRNATrp", "tRNAi^Lys"], a: 1, exp: "Bacteria often use an initiator tRNA carrying N‑formyl‑methionine. Eukaryotes use an initiator Met without formylation." },
      { q: "Which process directly follows release factor binding at a stop codon?", choices: ["DNA replication", "Hydrolysis of the peptidyl‑tRNA bond to release the peptide", "Addition of another amino acid", "Splicing of mRNA"], a: 1, exp: "Release factors catalyze hydrolysis that frees the completed polypeptide. Afterwards, ribosomal subunits dissociate and can be reused." },
      { q: "Polyribosomes (polysomes) are…", choices: ["single ribosomes only", "multiple ribosomes translating the same mRNA simultaneously", "a form of transcription", "chaperone complexes"], a: 1, exp: "Polysomes increase protein output by engaging many ribosomes on one transcript. This is common in both bacteria and eukaryotes." },
      { q: "Which feature differs most between bacterial and eukaryotic initiation?", choices: ["Use of GTP", "mRNA recognition: SD base‑pairing in bacteria vs 5′‑cap scanning in eukaryotes", "presence of tRNAs", "peptidyl transferase chemistry"], a: 1, exp: "Core chemistry is conserved, but mRNA recruitment mechanisms differ. Bacteria use SD–rRNA pairing; eukaryotes scan from the 5′ cap." },
      { q: "Which component is composed largely of rRNA and proteins and performs translation?", choices: ["Nuclear pore complex", "Ribosome", "Proteasome", "Spliceosome"], a: 1, exp: "Ribosomes catalyze peptide bond formation and decode mRNA with the help of tRNAs and factors. They are ribonucleoprotein machines." },
      { q: "Which statement about release factors is TRUE?", choices: ["They are tRNAs that carry no amino acid", "They are proteins that recognize stop codons and trigger termination", "They add amino acids at stops", "They cut DNA at promoters"], a: 1, exp: "Release factors read stop codons and catalyze hydrolysis of the peptidyl‑tRNA bond. Their action finalizes translation." },
      { q: "After synthesis, many eukaryotic proteins destined for secretion enter…", choices: ["mitochondria directly", "the ER lumen where they fold and undergo modifications", "the nucleus for degradation", "the lysosome first"], a: 1, exp: "Cotranslational translocation moves nascent chains into the ER lumen for folding, disulfide formation, and glycosylation. Vesicular traffic then delivers them to the Golgi and beyond." },
      { q: "Which choice lists the stop codons?", choices: ["UAA, UAG, UGA", "UGG, UGA, UGC", "AUG, UAG, UGA", "UAA, UGG, UGA"], a: 0, exp: "UAA, UAG, and UGA terminate translation by recruiting release factors. UGG encodes tryptophan and is not a stop." },
      { q: "What is meant by 'charging' a tRNA?", choices: ["Adding a phosphate to tRNA", "Covalently linking the correct amino acid to the tRNA by its synthetase", "Adding a cap to tRNA", "Splicing tRNA introns only"], a: 1, exp: "Charging ensures the anticodon is paired with its cognate amino acid, a critical fidelity checkpoint. The reaction uses ATP and produces AMP and PPi." },
      { q: "Which factor most directly ensures that the correct amino acid is added for a codon?", choices: ["Ribosomal A site shape only", "The match between codon and anticodon plus accurate tRNA charging by synthetases", "The 5′ cap", "Poly‑A tail length"], a: 1, exp: "Two checkpoints govern accuracy: decoding at the codon‑anticodon level and the prior correct charging of tRNAs by synthetases. Together they minimize errors." },
      { q: "Reading frame is set by…", choices: ["first AUG in proper context", "poly‑A tail", "random choice", "stop codon"], a: 0, exp: "The initiating AUG defines codon groupings for the ribosome. Maintaining this frame is essential for meaningful protein synthesis." }]
  },
  {
    key: "W9_Ch15_Part5_Mutations",
    label: "W9 Lecture16 Ch15 Part 5 – Mutations & Information Flow",
    questions: [      { q: "Replication errors that escape repair can cause…", choices: ["protein misfolding only", "mutations—heritable changes in DNA sequence", "chromosome number changes only", "no biological effects"], a: 1, exp: "Uncorrected errors become fixed as mutations after another round of replication. These changes can alter proteins or regulatory elements." },
      { q: "A silent mutation…", choices: ["changes an amino acid", "creates a stop codon", "does not change the encoded amino acid", "always shifts the reading frame"], a: 2, exp: "Because of genetic code degeneracy, some base substitutions leave the amino acid unchanged. Although silent at the protein level, some can affect splicing or mRNA stability." },
      { q: "A missense mutation…", choices: ["introduces a premature stop", "changes one amino acid to another", "has no effect ever", "removes an exon"], a: 1, exp: "Missense substitutions alter a codon to specify a different amino acid. The impact depends on the role and chemistry of the substituted residue." },
      { q: "A nonsense mutation converts a codon into…", choices: ["a start codon", "a stop codon", "a frameshift", "a splice site"], a: 1, exp: "Nonsense changes prematurely terminate translation, often producing truncated, nonfunctional proteins. The earlier the stop, the more severe the effect." },
      { q: "Frameshift mutations are typically caused by…", choices: ["triplet insertions or deletions", "insertions or deletions not in multiples of three", "silent substitutions", "synonymous changes only"], a: 1, exp: "Adding or deleting 1 or 2 nucleotides shifts the reading frame, scrambling downstream codons. This commonly introduces premature stops and loss of function." },
      { q: "Which is a type of chromosomal mutation?", choices: ["Base tautomerization", "Translocation between nonhomologous chromosomes", "Keto–enol shift only", "Wobble pairing"], a: 1, exp: "Chromosomal mutations impact large segments: translocations, inversions, duplications, deletions, and fusions. They can disrupt gene dosage and regulation." },
      { q: "Point mutations include…", choices: ["insertions of entire chromosomes", "single‑nucleotide substitutions", "centrosome duplications", "telomere elongation only"], a: 1, exp: "Point mutations change one base pair and can be silent, missense, or nonsense. Their effects range from benign to severe." },
      { q: "An insertion of one base early in a coding region is likely to…", choices: ["be silent", "cause a frameshift with widespread downstream changes", "have no effect", "lengthen the protein by one residue only"], a: 1, exp: "Early frameshifts typically alter most amino acids downstream and often introduce premature stops. This is usually deleterious." },
      { q: "Deletions that remove an entire exon can…", choices: ["increase enzyme activity always", "shorten the protein and remove important domains", "create more introns", "have no possible impact"], a: 1, exp: "Loss of domains often eliminates function or stability. Some deletions can also disrupt reading frame." },
      { q: "Which mutation best illustrates the phrase 'THC ATA NDD OG' from the slides?", choices: ["Silent", "Frameshift by insertion", "Missense", "Chromosomal fusion"], a: 1, exp: "Adding one letter shifts all subsequent groupings, analogous to a frameshift. The example demonstrates how meaning is lost after the shift." },
      { q: "Mutagens include…", choices: ["UV light and some chemicals that alter bases", "only heat", "only frameshift agents", "only errors during transcription"], a: 0, exp: "UV generates thymine dimers; alkylating agents and base analogs induce mispairing. Mutagens increase mutation rates above the spontaneous background." },
      { q: "Which outcome is LEAST likely for a nonsense mutation near the start of an ORF?", choices: ["Truncated protein lacking most domains", "Complete loss of function", "No change to protein", "Nonsense‑mediated decay of mRNA"], a: 2, exp: "Early stops typically have strong effects, sometimes triggering RNA surveillance pathways like NMD. An unchanged protein output would be unlikely." },
      { q: "Transitions are substitutions between…", choices: ["purine↔pyrimidine", "purine↔purine or pyrimidine↔pyrimidine", "amino acids only", "codon↔anticodon"], a: 1, exp: "Transitions conserve ring class (A↔G or C↔T/U). Transversions swap purine with pyrimidine and are less frequent." },
      { q: "Which repair or quality‑control process reduces mutations from replication?", choices: ["Mismatch repair and polymerase proofreading", "Shine–Dalgarno recognition", "Rho‑dependent termination", "Ribosome recycling"], a: 0, exp: "Proofreading excises misincorporated bases immediately, while mismatch repair corrects errors that escape proofreading. Together they greatly reduce the error rate." },
      { q: "A duplication event can…", choices: ["never change gene dosage", "increase dosage of genes and enable divergence of paralogs", "always silence genes", "eliminate recombination"], a: 1, exp: "Duplications raise copy number and can provide raw material for evolution. One copy can maintain function while another acquires new roles." },
      { q: "Which scenario most likely creates a loss‑of‑function allele?", choices: ["Synonymous substitution in last codon", "Frameshift within the first exon", "3′ UTR length change with no regulatory elements", "Conservative missense in flexible loop"], a: 1, exp: "Frameshifts early in coding regions often abolish function. Synonymous or conservative changes can be neutral depending on context." },
      { q: "Inversions can reduce fertility because…", choices: ["they never pair in meiosis", "mispaired crossing‑over within an inversion can create unbalanced gametes", "they increase the number of centromeres", "they delete telomeres automatically"], a: 1, exp: "Recombination within an inversion loop can yield duplications/deletions in gametes. This reduces the proportion of viable gametes." },
      { q: "Which statement about mutational effects is TRUE?", choices: ["All mutations are harmful", "Effects range from beneficial to neutral to deleterious depending on context", "Only coding mutations matter", "Synonymous mutations are always neutral"], a: 1, exp: "Environment, genetic background, and location determine outcomes. Some synonymous changes alter splicing or translation efficiency." },
      { q: "A base analog like 5‑bromouracil increases…", choices: ["translation speed", "mispairing during replication leading to substitutions", "ribosome accuracy", "chromosome number"], a: 1, exp: "Base analogs can tautomerize or mispair, elevating transition rates. They are classic chemical mutagens." },
      { q: "Thymine dimers are primarily repaired by…", choices: ["nucleotide excision repair in many organisms", "direct repair only in mitochondria", "RNA editing", "mismatch repair exclusively"], a: 0, exp: "NER recognizes helix distortions like dimers and removes an oligonucleotide patch. DNA polymerase fills the gap and ligase seals it." },
      { q: "Which is an example of a nonsense mutation effect at the protein level?", choices: ["Insertion of one extra methionine", "Premature termination leading to truncated, often unstable protein", "Improved enzymatic turnover", "Frameshift of three bases"], a: 1, exp: "Nonsense changes create an early stop that truncates the protein. Such products often misfold or are rapidly degraded." },
      { q: "A single‑base change that swaps a purine for a pyrimidine is a…", choices: ["transition", "transversion", "duplication", "inversion"], a: 1, exp: "Transversions interchange base classes (e.g., A↔T). Transitions swap within the same class (A↔G or C↔T)." },
      { q: "Which class of mutation is most likely to change many downstream amino acids?", choices: ["Missense", "Silent", "Frameshift", "Nonsense very near the end"], a: 2, exp: "Frameshifts alter the reading frame, so all subsequent codons are changed. This typically devastates protein function." },
      { q: "Chromosomal fusion can produce…", choices: ["shorter chromosomes without telomeres ever", "a new chromosome by joining two ends, potentially altering gene regulation", "no phenotypic effect by definition", "extra centrosomes"], a: 1, exp: "Fusions join chromosomes end‑to‑end and can reconfigure genomes. Regulatory environments and centromere structure may change." },
      { q: "Large deletions often cause disease because…", choices: ["they add exons", "they remove essential genes or regulatory elements", "they only affect introns", "they increase telomere length"], a: 1, exp: "Loss of coding or control sequences disrupts protein levels or function. Adjacent genes can also be affected by position effects." },
      { q: "Which of the following is a potential outcome of a point mutation in a promoter?", choices: ["Altered transcription factor binding and gene expression level", "Change in ribosome size", "Gain of extra chromosomes", "New stop codon in the protein"], a: 0, exp: "Promoter changes can up‑ or down‑regulate transcription by modifying TF affinity. Regulatory mutations can be as impactful as coding changes." },
      { q: "Why do not all mutations alter phenotype?", choices: ["All do alter phenotype", "Because many occur in noncritical regions, are silent, or are buffered by biology", "Because proteins are never sensitive to sequence", "Because repair removes every mutation"], a: 1, exp: "Neutrality can arise from redundancy, noncoding locations, or robustness of systems. Repair reduces but does not eliminate mutational load." },
      { q: "Which label best fits 'point mutation leading to same amino acid'?", choices: ["Missense", "Silent (synonymous)", "Nonsense", "Frameshift"], a: 1, exp: "Synonymous substitutions do not change the encoded amino acid. Nevertheless, they may still impact expression through codon usage or RNA structure." },
      { q: "A translocation moves…", choices: ["a DNA segment within the same chromosome only", "a DNA segment to a nonhomologous chromosome", "ribosomes to ER", "tRNAs to nucleus"], a: 1, exp: "Reciprocal or nonreciprocal exchanges between nonhomologs can disrupt or create novel gene fusions. Such changes can drive evolution or disease." },
      { q: "Mutation concept check 1: what distinguishes transition vs transversion?", choices: ["Transition swaps within purine or within pyrimidine; transversion swaps purine with pyrimidine", "Both terms mean the same", "Transitions always cause frameshifts", "Transversions only occur in RNA"], a: 0, exp: "Transitions conserve ring class (A↔G, C↔T), whereas transversions exchange ring class (purine↔pyrimidine). Different mechanisms bias their frequencies in genomes." }]
  },
  {
    key: "W10_Ch10_Part1_Mitosis",
    label: "W10 Lecture10 Ch10 Part 1 – Cell Reproduction, Genomes & Chromatin",
    questions: [      { q: "Which statement best distinguishes prokaryotic and eukaryotic genomes?", choices: ["Prokaryotes: one circular DNA in the nucleoid; Eukaryotes: multiple linear chromosomes in a nucleus", "Both have multiple linear chromosomes in nuclei", "Prokaryotes store DNA only in plasmids", "Eukaryotes have circular chromosomes only"], a: 0, exp: "Prokaryotes typically carry a single circular chromosome localized to the nucleoid region, though plasmids can be present. Eukaryotes package several linear chromosomes inside a membrane‑bound nucleus." },
      { q: "Plasmids in prokaryotes are described as…", choices: ["essential chromosomes", "small, extra DNA circles that can carry genes like antibiotic resistance", "proteins that compact DNA", "viral genomes integrated into cells"], a: 1, exp: "Plasmids are non‑chromosomal DNA circles that may confer advantages such as antibiotic resistance. They are dispensable for basic survival under many conditions but enhance adaptability." },
      { q: "Somatic vs. gamete chromosome sets are best described as…", choices: ["Somatic 2n; gametes 1n", "Somatic 1n; gametes 2n", "Both 2n", "Both 1n"], a: 0, exp: "Somatic cells usually contain paired homologs (diploid, 2n). Gametes carry one set (haploid, 1n) to restore diploidy at fertilization." },
      { q: "A karyotype is…", choices: ["an arrangement of chromosomes by size and morphology", "a list of genes in order", "a metabolic pathway map", "a protein sequence alignment"], a: 0, exp: "Karyotyping orders condensed chromosomes by size, centromere position, and banding. It is useful for identifying aneuploidies and structural changes." },
      { q: "Homologous chromosomes are…", choices: ["identical DNA molecules from replication", "a matched pair with the same genes but possibly different alleles", "nonhomologous sex chromosomes only", "duplicated sister chromatids"], a: 1, exp: "Homologs carry the same loci but may differ in specific variants (alleles). Sister chromatids are identical copies formed after DNA replication of one homolog." },
      { q: "Which pair is heterologous in human karyotypes?", choices: ["Chromosome 1 of mother and father", "X and Y chromosomes in typical males", "Sister chromatids of chromosome 3", "Chromosome 7 homologs"], a: 1, exp: "Sex chromosomes X and Y differ substantially in size and gene content and therefore are heterologous. Autosomal pairs are homologous." },
      { q: "The primary reason eukaryotic DNA must be packaged is that…", choices: ["it improves replication accuracy only", "it allows meters of DNA to fit into micrometer‑scale nuclei", "it prevents transcription entirely", "it eliminates the need for histones"], a: 1, exp: "Chromosome packaging compacts enormous DNA lengths into nuclei while still permitting access. Dynamic packing balances accessibility with protection." },
      { q: "The basic unit of chromatin is the…", choices: ["telomere", "origin of replication", "nucleosome", "centromere"], a: 2, exp: "DNA wraps ~1.7 turns around an octamer of core histones (H2A, H2B, H3, H4) to form a nucleosome. Linker histone H1 helps organize higher‑order structures." },
      { q: "Which statement about linker histone H1 is accurate?", choices: ["It is a DNA polymerase", "It helps fold nucleosome arrays into a 30‑nm fiber and higher‑order structures", "It splices introns", "It is only found in bacteria"], a: 1, exp: "H1 binds linker DNA and contributes to chromatin fiber formation. This compaction is modulated during the cell cycle and gene regulation." },
      { q: "Chromatin is most condensed during…", choices: ["interphase", "metaphase of mitosis", "G1 entry", "cytokinesis only"], a: 1, exp: "At metaphase, chromosomes achieve maximal condensation to facilitate accurate segregation. Interphase chromatin is comparatively decondensed for expression and replication." },
      { q: "Which is TRUE about euchromatin vs heterochromatin?", choices: ["Euchromatin is less condensed and more transcriptionally active than heterochromatin", "Heterochromatin is loosely packed and always active", "They refer to bacterial chromosomes", "They only appear during S phase"], a: 0, exp: "Euchromatin’s open configuration favors gene expression. Heterochromatin is compacted and generally silent, contributing to structural integrity at centromeres and telomeres." },
      { q: "Cell division serves what functions in multicellular organisms?", choices: ["Only reproduction", "Growth, maintenance, and repair of tissues", "Only gamete formation", "Only wound scarring without cell increase"], a: 1, exp: "Mitotic division expands cell numbers during development and replaces damaged or aged cells. Specialized divisions like meiosis create gametes for sexual reproduction." },
      { q: "Which statement about sister chromatids is correct?", choices: ["They are homologs from each parent", "They are identical copies produced by DNA replication of a single chromosome", "They pair only in meiosis I", "They are haploid units"], a: 1, exp: "Sister chromatids arise after S phase and are held together by cohesin until anaphase. Homologs are the parental chromosome pair, not identical copies." },
      { q: "During the cell cycle, DNA replication occurs in…", choices: ["G1", "S phase", "G2", "M phase"], a: 1, exp: "S phase (synthesis) duplicates the genome prior to mitosis. G1 and G2 are gap phases that prepare for DNA replication and division respectively." },
      { q: "Centromeres are important because they…", choices: ["anchor chromosomes to the nuclear envelope", "contain DNA sequences and proteins where kinetochores form to attach spindle microtubules", "are sites of rRNA transcription", "initiate replication"], a: 1, exp: "Kinetochores assemble at centromeres to capture spindle fibers, ensuring proper segregation. Their structure is vital for mitotic accuracy." },
      { q: "Microtubules that connect to kinetochores are called…", choices: ["astral microtubules", "kinetochore microtubules", "interpolar microtubules", "actin cables"], a: 1, exp: "Kinetochore microtubules physically link chromosomes to the spindle. Astral and interpolar microtubules stabilize spindle position and shape." },
      { q: "Which event characterizes prophase in mitosis?", choices: ["Chromosomes decondense completely", "Nuclear envelope breaks down and spindle begins to form", "Sister chromatids separate", "Cytokinesis completes"], a: 1, exp: "Prophase/prometaphase involve chromosome condensation, centrosome separation, and nuclear envelope breakdown. Microtubules search and capture kinetochores." },
      { q: "At metaphase, chromosomes…", choices: ["align at the cell equator (metaphase plate)", "pair homologs in bivalents", "segregate to poles", "replicate DNA"], a: 0, exp: "Alignment at the metaphase plate ensures that sister chromatids are attached to opposite poles. This geometry is checked by the spindle checkpoint." },
      { q: "Anaphase begins when…", choices: ["cohesin is cleaved and sister chromatids move to opposite poles", "DNA replication starts", "the nuclear envelope reforms", "chromosomes condense for the first time"], a: 0, exp: "Separase cleaves cohesin, releasing chromatids to be pulled by depolymerizing microtubules. This is the irreversible commitment to segregation." },
      { q: "Cytokinesis in animal cells typically involves…", choices: ["a cell plate", "a contractile ring of actin and myosin forming a cleavage furrow", "clathrin‑mediated pits", "binary fission proteins FtsZ only"], a: 1, exp: "Actomyosin constriction pinches the plasma membrane to separate daughter cells. Plant cells build a cell plate from Golgi‑derived vesicles." },
      { q: "Binary fission in bacteria differs from mitosis because…", choices: ["it uses a mitotic spindle", "it lacks a nucleus and uses FtsZ to coordinate septum formation", "it requires nuclear envelope breakdown", "it occurs only in eukaryotes"], a: 1, exp: "Prokaryotes divide by binary fission, assembling a Z‑ring from FtsZ at midcell. There is no mitotic spindle or nuclear membrane to disassemble." },
      { q: "The genome is defined as…", choices: ["all RNA molecules only", "the complete set of DNA in a cell or organism", "only protein‑coding regions", "only mitochondrial DNA"], a: 1, exp: "Genome encompasses coding and noncoding sequences across nuclear and organellar chromosomes. It is the full hereditary information." },
      { q: "Which statement about chromosome number is correct?", choices: ["It varies randomly within a species", "It is generally constant within a species but differs among species", "It is identical in all organisms", "It always changes with age"], a: 1, exp: "Species typically have a characteristic chromosome count. However, ploidy can vary by cell type (e.g., gametes) or in special cases." },
      { q: "Chromosome packaging reaches its peak at…", choices: ["G0", "metaphase", "S phase", "telophase"], a: 1, exp: "Metaphase compaction facilitates mechanical movement of chromosomes. Telophase marks decondensation as nuclei reform." },
      { q: "Which statement about histones is TRUE?", choices: ["They are acidic proteins", "They are small, basic proteins that bind DNA", "They are membrane proteins", "They are ribozymes"], a: 1, exp: "Histones are rich in lysine and arginine, enabling electrostatic interaction with the negatively charged DNA backbone. Their tails can be post‑translationally modified to regulate chromatin state." },
      { q: "What is a genome 'plasmid exchange' benefit mentioned in lecture slides?", choices: ["Enhanced glycolysis", "Horizontal transfer of traits like antibiotic resistance", "Improved mitotic spindle formation", "Higher telomerase activity"], a: 1, exp: "Plasmids often carry beneficial genes such as antibiotic resistance, which can spread through populations. This exchange accelerates adaptation." },
      { q: "Why does mitosis require chromosome condensation?", choices: ["To maximize transcription output", "To prevent tangling and breakage during movement to poles", "To shut down translation", "To replicate DNA faster"], a: 1, exp: "Condensation produces robust bodies that can be moved without shearing. It also helps ensure faithful segregation." },
      { q: "Which term refers to matched pairs of chromosomes in a diploid cell?", choices: ["Sister chromatids", "Homologous chromosomes", "Centrioles", "Anaphase bridges"], a: 1, exp: "Homologs are the maternal and paternal versions of the same chromosome. Sister chromatids are duplicated copies of one homolog." },
      { q: "A human cell with 46 chromosomes in G2 contains…", choices: ["46 chromatids total", "92 chromatids arranged as 46 pairs of sisters", "23 chromatids total", "92 separate chromosomes each with one chromatid"], a: 1, exp: "After S phase, each of the 46 chromosomes consists of two sister chromatids, totaling 92 chromatids. They separate during anaphase." },
      { q: "Which best describes the nucleus in prokaryotes?", choices: ["They have a true nucleus", "They lack a membrane‑bound nucleus; DNA resides in the nucleoid", "They have multiple nuclei per cell", "They only have mitochondrial DNA"], a: 1, exp: "Prokaryotic DNA is located in a nucleoid region without a surrounding membrane. This architecture enables coupled transcription‑translation." }]
  },

  {
  key: "W11_Ch10_Part2_CellCycle",
  label: "W11 Lecture10 Ch10 Part 2 – Cell Cycle & Mitosis",
  questions: [
    { q: "Which two major phases partition the eukaryotic cell cycle?",
      choices: ["G1 and S", "Interphase and Mitotic (M) phase", "S and G2", "Prophase and Telophase"],
      a: 1,
      exp: "The cell cycle is divided into Interphase (growth and DNA replication) and the Mitotic phase (karyokinesis + cytokinesis). This framework clarifies when genetic material is duplicated versus segregated." },

    { q: "What happens during G1 of interphase?",
      choices: ["DNA replication", "Chromosome segregation", "Biochemical activity and growth with preparation for S phase", "Nuclear envelope breakdown"],
      a: 2,
      exp: "G1 is a growth and preparation stage in which the cell increases biomass and assesses conditions. It sets up the cell for accurate DNA synthesis in S phase." },

    { q: "Which event defines S phase?",
      choices: ["Centromere division", "RNA synthesis only", "DNA synthesis yielding sister chromatids joined at the centromere", "Mitotic spindle disassembly"],
      a: 2,
      exp: "During S phase the genome is replicated to form sister chromatids. Cohesion between chromatids persists until anaphase." },

    { q: "The primary role of centrosomes during interphase and mitosis is to…",
      choices: ["Transcribe rRNA", "Produce mitotic spindle microtubules to move chromosomes", "Form the cell plate", "Degrade cyclins"],
      a: 1,
      exp: "Centrosomes nucleate microtubules that organize the mitotic spindle. In animal cells they associate with centrioles that aid spindle orientation." },

    { q: "Which is the correct order of mitotic sub‑stages?",
      choices: ["Metaphase → Prophase → Anaphase → Telophase", "Prophase → Prometaphase → Metaphase → Anaphase → Telophase", "Interphase → Cytokinesis → Anaphase", "G1 → S → G2 → M → G0"],
      a: 1,
      exp: "Chromosome condensation and spindle assembly begin in prophase, kinetochores attach in prometaphase, alignment occurs in metaphase, separation in anaphase, and reformation of nuclei in telophase. The clarity of this order helps diagnose mitotic defects." },

    { q: "A kinetochore is…",
      choices: ["A DNA replication origin", "A protein complex assembled at the centromere that binds spindle microtubules", "The microtubule organizing center", "A cytokinetic ring"],
      a: 1,
      exp: "Kinetochores mediate the connection between chromosomes and spindle fibers. Proper attachment is essential to avoid nondisjunction." },

    { q: "What hallmark defines metaphase?",
      choices: ["Nuclear envelope reformation", "Chromosomes line up on the metaphase plate with cohesion still intact", "Sister chromatid separation", "Cell furrow ingression"],
      a: 1,
      exp: "All duplicated chromosomes align at the cell equator. Cohesin persists at centromeres until the anaphase trigger." },

    { q: "Which molecular event directly enables the onset of anaphase?",
      choices: ["Loss of microtubules", "Cohesin degradation allowing sister chromatids to part", "Nuclear envelope breakdown", "Actin ring assembly"],
      a: 1,
      exp: "Proteolysis of cohesin resolves sister chromatid pairs so they move to opposite poles. This ensures each daughter cell receives one copy of every chromosome." },

    { q: "During anaphase, chromosomes move toward…",
      choices: ["The metaphase plate", "Centrosomes (spindle poles) to which their microtubules are attached", "The nucleolus", "The cell cortex for endocytosis"],
      a: 1,
      exp: "Sister chromatids are pulled poleward along kinetochore microtubules. Concomitantly, the cell elongates to aid physical separation of the genomes." },

    { q: "Which description best fits telophase?",
      choices: ["Peak chromosome condensation and kinetochore capture", "Chromosomes reach poles and begin to decondense; nuclear envelopes reform", "Cleavage furrow constriction", "DNA replication restarts"],
      a: 1,
      exp: "Telophase reverses mitotic condensation and rebuilds nuclear architecture. It prepares the cell for cytokinesis and interphase entry." },

    { q: "Cytokinesis in animal versus plant cells differs primarily in…",
      choices: ["Timing relative to telophase", "Mechanism: contractile ring cleavage furrow versus cell plate formation", "Requirement for microtubules", "Dependence on mitochondria"],
      a: 1,
      exp: "Animals use an actomyosin ring to pinch the cell in two, forming a cleavage furrow. Plants assemble a cell plate from vesicles that grows outward to partition the cytoplasm." },

    { q: "Which statement about G0 is correct?",
      choices: ["It is a mitotic sub‑stage", "It is a quiescent state where cells pause division, sometimes reversibly", "It requires cytokinesis to enter", "Only bacteria use it"],
      a: 1,
      exp: "Cells in G0 are not actively cycling and may await growth signals or nutrients. Some lineages (e.g., neurons, cardiomyocytes) can remain in G0 long‑term." },

    { q: "Which organelles disperse toward the cell periphery during early mitosis?",
      choices: ["Mitochondria only", "Golgi complex and endoplasmic reticulum membranes", "Lysosomes only", "Peroxisomes only"],
      a: 1,
      exp: "Membranous organelles such as Golgi and ER fragments redistribute as the NE breaks down. This reorganization facilitates spindle access to chromosomes." },

    { q: "Prometaphase is distinguished from prophase by…",
      choices: ["Nucleolus enlargement", "Spindle formation initiation", "Nuclear envelope breakdown and kinetochore–microtubule attachment", "Chromosome decondensation"],
      a: 2,
      exp: "After the envelope ruptures, microtubules can attach kinetochores. This transition allows active congression to the metaphase plate." },

    { q: "What maintains sister chromatids paired prior to anaphase?",
      choices: ["Separase", "Cohesin proteins", "Kinesin‑5", "Condensin phosphorylation only"],
      a: 1,
      exp: "Cohesin ring complexes embrace sister chromatids until proteolysis at anaphase onset. Their regulated removal ensures synchronous separation." },

    { q: "Which statement about the metaphase plate is accurate?",
      choices: ["It is a physical structure made of actin", "It is the equatorial plane where chromosomes align under balanced forces", "It is the centrosome matrix", "It is the midbody"],
      a: 1,
      exp: "The metaphase plate is a geometric plane, not a structure. Balanced pulling and pushing forces position kinetochores there until all are attached appropriately." },

    { q: "During telophase, mitotic spindles…",
      choices: ["Polymerize further", "Depolymerize into tubulin subunits that will be reused", "Transform into actin bundles", "Anchor kinetochores more strongly"],
      a: 1,
      exp: "Spindle microtubules disassemble, returning tubulin to the cytosolic pool. Daughter cells reuse these subunits for future cytoskeletal needs." },

    { q: "Which phrase best describes cytokinesis?",
      choices: ["Nuclear division", "Chromosome duplication", "Physical separation of cytoplasm into two daughter cells", "Kinetochore assembly"],
      a: 2,
      exp: "Cytokinesis divides the cell body after the genome has been segregated. It completes cell division in coordination with late mitosis." },

    { q: "Which cells are classical examples of permanent G0 residence?",
      choices: ["Hepatocytes", "Intestinal stem cells", "Mature cardiac muscle and many neurons", "Skin keratinocytes"],
      a: 2,
      exp: "Cardiomyocytes and most neurons rarely reenter the cell cycle once mature. Their quiescence underscores the limited regenerative capacity of these tissues." },

    { q: "What is the immediate consequence of incorrect kinetochore attachment during metaphase?",
      choices: ["Faster anaphase onset", "Activation of a checkpoint that delays anaphase until corrected", "Nuclear envelope reformation", "G0 entry"],
      a: 1,
      exp: "Unattached or tension‑less kinetochores signal to halt progression. This safeguard promotes accurate chromosome segregation and genome stability." },

    { q: "Which component helps chromosomes coil more tightly during prophase?",
      choices: ["Ribosomes", "Condensin proteins", "Actin filaments", "Lamins"],
      a: 1,
      exp: "Condensins restructure chromatin into highly compact forms. This compaction is necessary for efficient movement on the spindle." },

    { q: "What marks successful completion of mitosis before cytokinesis is fully complete?",
      choices: ["Sister chromatids still paired", "Nuclear envelope still broken down", "Chromosomes at opposite poles with nuclei reforming", "No spindle assembly"],
      a: 2,
      exp: "By telophase, chromosomes have reached the poles and nuclei are reassembled. Cytokinesis then partitions the cytoplasm to complete cell division." },

    { q: "In plant cells, the cell plate arises from…",
      choices: ["Actin ring contraction", "Vesicle fusion at the midline delivering wall materials", "Microtubule severing at the cortex", "Golgi degradation"],
      a: 1,
      exp: "Trafficked vesicles coalesce to form a new partition that becomes the cell wall between daughters. This process substitutes for a cleavage furrow in plants." },

    { q: "Which feature distinguishes interphase from mitosis visually?",
      choices: ["Highly condensed chromosomes in the nucleus during interphase", "Diffuse chromatin and an intact nuclear envelope during interphase", "Spindle fibers attached to kinetochores during interphase", "Presence of a cleavage furrow during interphase"],
      a: 1,
      exp: "Interphase nuclei show uncondensed chromatin and a clear nuclear boundary. Condensed, discrete chromosomes are a hallmark of mitosis." },

    { q: "What is the minimal definition of karyokinesis?",
      choices: ["Cytoplasmic division", "Nuclear division that separates duplicated genomes", "Cell growth after division", "Centrosome replication"],
      a: 1,
      exp: "Karyokinesis partitions the duplicated chromosomes into two nuclei. It precedes and coordinates with cytokinesis to ensure faithful inheritance." }
  ]
},
  {
  key: "W11_Ch10_Part3_CellCycleRegulation",
  label: "W11 Lecture10 Ch10 Part 3 – Checkpoints & Regulation",
  questions: [
    { q: "Where are the three principal eukaryotic cell‑cycle checkpoints located?",
      choices: ["Start of S, middle of S, end of S", "Near end of G1, G2→M transition, and metaphase (spindle) checkpoint", "Prophase, metaphase, telophase", "G0, G1, G2"],
      a: 1,
      exp: "Checkpoints assess readiness before DNA replication (G1), before mitosis (G2/M), and before anaphase (M/spindle). This staging ensures fidelity at each critical transition." },

    { q: "What conditions are evaluated at the G1 checkpoint?",
      choices: ["Okazaki fragment completion", "External growth signals, adequate cell size and reserves, and DNA integrity", "Spindle attachment", "Cytokinesis timing"],
      a: 1,
      exp: "Cells integrate growth factor cues with internal reserves and genome status. Failure reroutes cells to repair attempts or G0 quiescence." },

    { q: "The G2 checkpoint verifies primarily that…",
      choices: ["Centrioles are degraded", "All chromosomes have replicated and DNA is undamaged", "Spindle attachments are under tension", "Cyclins are absent"],
      a: 1,
      exp: "Completion and quality of DNA replication are confirmed before mitosis. This stop prevents segregation of damaged or incomplete genomes." },

    { q: "The spindle (M) checkpoint monitors…",
      choices: ["Nuclear envelope integrity", "Whether all kinetochores are properly attached to spindle microtubules", "Cyclin degradation only", "Cytokinetic ring assembly"],
      a: 1,
      exp: "Only when every sister chromatid pair is correctly attached will anaphase proceed. This prevents nondisjunction and aneuploidy." },

    { q: "Which statement correctly contrasts positive and negative cell‑cycle regulators?",
      choices: ["Both halt the cycle", "Positive regulators promote progression; negative regulators restrain it", "Positive regulators degrade cyclins", "Negative regulators are growth factors"],
      a: 1,
      exp: "Cyclins and Cdks push the cycle forward when activated, whereas proteins like Rb, p53, and p21 impose brakes. Balance between these forces maintains control." },

    { q: "Cyclins and Cdks are considered positive regulators because…",
      choices: ["Their levels are constant and inhibitory", "They fluctuate and drive transitions when activated by signals", "They are DNA repair enzymes", "They form kinetochores"],
      a: 1,
      exp: "Cyclin concentrations oscillate and bind Cdks to trigger key transitions. External and internal signals modulate these oscillations to couple growth to division." },

    { q: "Which trio represents classic negative regulators at the G1 checkpoint?",
      choices: ["p53, p21, Rb", "Cyclin A, Cyclin B, Cdk1", "Kinesin, dynein, myosin", "E2F, ORC, Cdc45"],
      a: 0,
      exp: "Rb, p53, and p21 restrain inappropriate entry into S phase. Loss‑of‑function in these proteins is common in tumors due to loss of checkpoint control." },

    { q: "Over half of human cancers harbor loss‑of‑function mutations in which gene?",
      choices: ["RB1", "CDK1", "TP53", "CDKN1A"],
      a: 2,
      exp: "TP53 encodes p53, a master guardian of the genome. Its inactivation removes a central barrier to propagation of DNA damage." },

    { q: "Cancer can be viewed fundamentally as…",
      choices: ["A disease of perfect regulation", "Uncontrolled cell growth often beginning with mutations in regulatory genes", "A viral infection only", "A deficiency of mitochondria"],
      a: 1,
      exp: "Oncogenesis typically starts with mutations that alter proteins controlling proliferation or survival. Subsequent changes enable sustained growth and invasion." },

    { q: "Proto‑oncogenes normally encode…",
      choices: ["Negative regulators that stop the cycle", "Positive regulators of the cycle that, when mutated, can become oncogenes", "DNA ligases", "Caspases for apoptosis only"],
      a: 1,
      exp: "When proto‑oncogenes gain activating mutations, they become oncogenes that drive proliferation. This shift tips the balance toward cell‑cycle progression." },

    { q: "Tumor suppressor genes encode proteins that…",
      choices: ["Always accelerate the cycle", "Promote uncontrolled division", "Act as negative regulators to restrain proliferation", "Form kinetochores"],
      a: 2,
      exp: "Tumor suppressors impose cell‑cycle brakes and foster genome maintenance. Their loss disables checkpoint barriers, fostering tumorigenesis." },

    { q: "If a cell fails the G1 checkpoint, which fates are typical?",
      choices: ["Immediate anaphase", "Stop and attempt repair or enter G0 to await improved conditions", "Undergo meiosis", "Differentiate into a neuron necessarily"],
      a: 1,
      exp: "Cells do not proceed into S when conditions are unfavorable or DNA is damaged. They will pause to correct problems or become quiescent until cues improve." },

    { q: "How do external signals influence cell‑cycle entry?",
      choices: ["They are irrelevant to the cycle", "Growth factors and cell density cues can initiate or inhibit progression", "Only temperature matters", "Only osmolarity matters"],
      a: 1,
      exp: "Mitogens and crowding signals integrate with intracellular pathways to regulate cyclins/Cdks. Such coupling aligns proliferation with tissue needs." },

    { q: "What outcome could result from failure of the spindle checkpoint?",
      choices: ["Enhanced genome stability", "Nondisjunction leading to aneuploid daughter cells", "Faster cytokinesis but accurate segregation", "Shorter S phase"],
      a: 1,
      exp: "If anaphase begins with improper attachments, chromosomes may segregate unequally. Aneuploidy compromises cell viability or promotes cancer progression." },

    { q: "Which best defines an oncogene?",
      choices: ["A normal gene that slows the cycle", "A mutated proto‑oncogene that promotes uncontrolled growth", "A DNA repair gene only", "A checkpoint that stops anaphase"],
      a: 1,
      exp: "Oncogenes produce hyperactive or overexpressed proteins that drive division even without proper signals. They are key drivers of tumorigenesis." },

    { q: "Rb protein primarily restrains the cycle by…",
      choices: ["Activating separase", "Sequestering E2F to block S‑phase gene transcription until appropriate signals", "Degrading microtubules", "Phosphorylating histones"],
      a: 1,
      exp: "Rb binds E2F transcription factors to prevent premature S‑phase entry. Cyclin‑Cdk phosphorylation of Rb releases E2F to induce replication genes." },

    { q: "p21 is transcriptionally induced by which regulator and acts to…",
      choices: ["Cyclin B; activate Cdk1", "p53; inhibit cyclin‑Cdk complexes", "Rb; degrade cohesin", "APC/C; build spindles"],
      a: 1,
      exp: "DNA damage stabilizes p53, which upregulates p21. p21 binds and inhibits Cdks, pausing the cycle to allow repair." },

    { q: "How do cyclin levels typically behave over the cycle?",
      choices: ["Remain constant", "Oscillate predictably, peaking before their associated transitions", "Increase monotonically", "Drop to zero permanently in S"],
      a: 1,
      exp: "Cyclin synthesis and degradation create pulses that time transitions. These dynamics are tuned by upstream signaling pathways." },

    { q: "Prokaryotic cell division most commonly occurs by…",
      choices: ["Meiosis", "Binary fission", "Mitosis", "Endocytosis"],
      a: 1,
      exp: "Bacteria replicate their circular chromosome and divide by binary fission. This process produces genetically identical daughter cells in unicellular organisms." },

    { q: "Which cue would most directly trigger G1→S progression in a growth‑factor‑dependent cell?",
      choices: ["Loss of nutrients", "Mitogen binding that elevates G1 cyclins and Cdk activity", "Spindle tension", "Cytokinesis completion"],
      a: 1,
      exp: "Mitogenic signaling increases cyclin D/E levels, activating Cdks to overcome Rb restraint. This commits the cell to DNA replication." },

    { q: "From a systems view, cancer progression often entails…",
      choices: ["Simultaneous strengthening of brakes and weakening of accelerators", "Weakening of brakes (tumor suppressors) and strengthening of accelerators (oncogenes)", "Neither brakes nor accelerators change", "Only metabolic changes"],
      a: 1,
      exp: "Oncogenic activation and tumor‑suppressor loss cooperate to unbalance control circuits. The resulting dysregulation enables continuous proliferation." },

    { q: "Why is the G2/M checkpoint critical after DNA replication?",
      choices: ["To ensure kinetochores have formed", "To verify replication completeness and repair remaining damage before mitosis", "To assemble the contractile ring", "To degrade the nucleolus"],
      a: 1,
      exp: "Segregating incomplete or damaged DNA risks chromosome breaks and mutations. This checkpoint protects genome integrity before commitment to mitosis." },

    { q: "What term describes the condition where a cell has an abnormal chromosome number due to segregation errors?",
      choices: ["Euploidy", "Aneuploidy", "Polyteny", "Ploidy neutrality"],
      a: 1,
      exp: "Aneuploidy reflects gains or losses of whole chromosomes. It can impair viability or drive disease states including cancer." },

    { q: "Which statement about external control is TRUE?",
      choices: ["Cell crowding promotes proliferation", "Death of neighboring cells or added growth hormones can stimulate division", "External cues only inhibit division", "External cues are irrelevant in multicellular organisms"],
      a: 1,
      exp: "Tissues integrate signals such as released mitogens and contact inhibition. These cues align cell production with organismal needs." },

    { q: "A cell that cannot correct G1 DNA damage despite p53 activation will most likely…",
      choices: ["Proceed to S phase", "Undergo apoptosis or maintain arrest to prevent propagation of damage", "Skip directly to cytokinesis", "Enter meiosis"],
      a: 1,
      exp: "When repair fails, p53 can promote cell death pathways to protect the organism. This fail‑safe prevents expansion of genomically unstable clones." }
  ]
}
,
  {
  key: "W11_Ch11_Part1_MeiosisI",
  label: "W11 Lecture12 Ch11 Part 1 – Meiosis I & Genetic Variation",
  questions: [
      { q: "What is the primary purpose of meiosis in sexually reproducing organisms?", choices: ["To produce genetically identical diploid cells", "To reduce chromosome number and generate haploid gametes", "To repair DNA only", "To increase cell size"], a: 1, exp: "Meiosis halves the chromosome number (2n to 1n) so that fertilization restores diploidy without doubling every generation. It also reshuffles genetic information to create variation." },
      { q: "Before meiosis begins, what happens during interphase?", choices: ["Chromosomes are degraded", "DNA replicates during S phase to form sister chromatids", "Cytokinesis occurs twice", "Centromeres disappear"], a: 1, exp: "Meiosis is preceded by a normal interphase consisting of G1, S, and G2. In S phase, DNA replication produces identical sister chromatids joined at the centromere." },
      { q: "During Prophase I, homologous chromosomes pair in a process called:", choices: ["Synapsis", "Syngamy", "Cytokinesis", "Endocytosis"], a: 0, exp: "Synapsis aligns homologous chromosomes along their lengths with the help of the synaptonemal complex. This pairing enables crossing over between non-sister chromatids." },
      { q: "The proteinaceous structure that holds homologs together during synapsis is the:", choices: ["Kinetochore", "Synaptonemal complex", "Cohesin ring", "Midbody"], a: 1, exp: "The synaptonemal complex forms between homologs to stabilize pairing in Prophase I. It brings chromatids into close proximity to facilitate recombination." },
      { q: "Exchange of genetic material between non-sister chromatids produces visible structures called:", choices: ["Centromeres", "Chiasmata", "Nucleosomes", "Lamins"], a: 1, exp: "Chiasmata are crossover sites where chromatids have exchanged segments. They physically hold homologous chromosomes together until Anaphase I." },
      { q: "A tetrad consists of:", choices: ["Two chromatids from one chromosome", "Four chromatids (two homologous chromosomes, each duplicated)", "Three chromatids plus a centromere", "Two homologs not replicated"], a: 1, exp: "After DNA replication, each homolog has two sister chromatids. When homologs pair during Prophase I, the four chromatids are collectively called a tetrad." },
      { q: "In Prometaphase I, spindle microtubules attach to:", choices: ["The synaptonemal complex directly", "Kinetochores on homologous chromosomes", "Nucleoli", "Nuclear pores"], a: 1, exp: "Each homolog develops kinetochores that capture microtubules from opposite poles. This configuration ensures segregation of homologs at Anaphase I." },
      { q: "What hallmark arrangement defines Metaphase I?", choices: ["Chromosomes on a metaphase plate as single chromatids", "Homologous pairs aligned at the equator with kinetochores facing opposite poles", "Nuclear envelopes fully reformed", "Chromosomes randomly distributed without alignment"], a: 1, exp: "During Metaphase I, each homologous pair lines up at the cell equator. Orientation of maternal vs. paternal homologs is random, contributing to genetic variation." },
      { q: "Which event occurs in Anaphase I?", choices: ["Sister chromatids separate", "Homologous chromosomes separate and move to opposite poles", "Nuclear envelope forms", "DNA replication resumes"], a: 1, exp: "Cohesion along chromosome arms is released so homologs disjoin, while sister chromatid cohesion near centromeres is maintained. This reduces ploidy from 2n toward 1n." },
      { q: "Independent assortment during Metaphase I refers to:", choices: ["Random selection of sister chromatids", "Random orientation of homologous pairs producing 2^n combinations", "Random DNA replication origins", "Random spindle fiber number"], a: 1, exp: "Each homologous pair aligns independently of the others, so maternal and paternal chromosomes are assorted into gametes in many combinations. For humans (n=23), this yields over eight million possibilities." },
      { q: "What is the immediate result at the end of Meiosis I for a diploid cell?", choices: ["Two diploid cells with identical chromosomes", "Two haploid cells with duplicated chromosomes", "One tetraploid cell", "Four haploid cells"], a: 1, exp: "Meiosis I separates homologs, not sister chromatids. The two daughter cells are haploid with chromosomes still present as sister chromatids." },
      { q: "Which structure remains intact between sister chromatids until Anaphase II?", choices: ["Chiasmata", "Cohesin at centromeres", "Synaptonemal complex", "Nuclear lamina"], a: 1, exp: "Although cohesin along arms is removed in Anaphase I, centromeric cohesin persists. This keeps sister chromatids together until their separation in Meiosis II." },
      { q: "Crossing over increases genetic diversity because it:", choices: ["Duplicates every gene", "Generates new allele combinations on chromatids", "Prevents recombination", "Forces identical chromatids"], a: 1, exp: "Recombination mixes maternal and paternal alleles on the same chromosome. The resulting chromatids differ from both parental chromatids." },
      { q: "During Telophase I and cytokinesis:", choices: ["Chromosomes decondense fully in all species and nuclei always reform", "Separated homologs arrive at poles; cytokinesis partitions cytoplasm (nuclear reformation varies by species)", "DNA replication occurs again", "Sister chromatids separate"], a: 1, exp: "After homologs segregate, cells divide their cytoplasm to form two haploid cells. Whether a nuclear envelope briefly reforms depends on the organism." },
      { q: "Which best distinguishes meiosis from mitosis?", choices: ["Presence of kinetochores", "Pairing of homologous chromosomes and reduction division", "Use of microtubules", "Involvement of cyclins"], a: 1, exp: "Only meiosis features synapsis and segregation of homologs to halve ploidy. Mitosis separates sister chromatids without changing chromosome number." },
      { q: "Which statement about the synaptonemal complex is accurate?", choices: ["It is a DNA sequence at centromeres", "It is a protein structure that forms between homologs during Prophase I", "It is a ring that holds sister chromatids only", "It is the same as the kinetochore"], a: 1, exp: "The synaptonemal complex scaffolds homolog alignment for recombination. It disassembles as meiosis progresses toward Metaphase I." },
      { q: "What ensures each gamete receives only one member of each homologous pair?", choices: ["Chromatid duplication", "Segregation of homologs to opposite poles in Anaphase I", "Formation of cleavage furrow", "Replication licensing"], a: 1, exp: "Meiosis I partitions homologs so that each daughter cell carries one set. Meiosis II subsequently separates the sisters." },
      { q: "Why doesn't meiosis double chromosome number across generations?", choices: ["Because fertilization is skipped", "Because meiosis reduces diploid to haploid before fertilization restores diploidy", "Because DNA does not replicate", "Because mitosis follows immediately"], a: 1, exp: "Reduction division ensures gametes are haploid. Fusion of two haploid gametes yields a diploid zygote, keeping the species' chromosome number constant." },
      { q: "Which choice correctly describes chiasmata?", choices: ["Sites of kinetochore attachment", "Points where crossing over occurred and chromatids remain linked", "Nucleolar organizers", "Centrosome duplication sites"], a: 1, exp: "Chiasmata represent physical manifestations of recombination. They help maintain homolog pairing until anaphase pulls homologs apart." },
      { q: "In many plants vs. animals, cytokinesis differs because:", choices: ["Plants form a cleavage furrow while animals build a cell plate", "Animals form a cleavage furrow while plants assemble a cell plate", "Both do the same process", "Neither performs cytokinesis"], a: 1, exp: "Animal cells use an actomyosin contractile ring to pinch the cell in two. Plant cells deliver vesicles to the midline to build a new wall called the cell plate." },
      { q: "Which event directly increases the number of genetically distinct gametes even without crossing over?", choices: ["Random fertilization", "Independent assortment of homologs", "DNA repair", "Cytokinesis"], a: 1, exp: "Independent assortment shuffles whole chromosomes into different gametes. This alone creates millions of combinations in humans." },
      { q: "Which of the following accurately characterizes the state of chromosomes entering Meiosis I?", choices: ["Unreplicated single chromatids", "Replicated as sister chromatids within homologous pairs", "Tetraploid unpaired DNA", "RNA-DNA hybrids"], a: 1, exp: "After S phase, each homolog consists of two sister chromatids. These homologs pair with each other during Prophase I." },
      { q: "If crossing over did not occur, which outcome would decrease?", choices: ["Chromosome number in gametes", "Genetic variation among gametes", "Success of metaphase alignment", "Occurrence of independent assortment"], a: 1, exp: "Recombination generates novel allele combinations on each chromosome. Without it, diversity would rely only on independent assortment and mutation." },
      { q: "Which checkpoint-like mechanism prevents premature Anaphase I?", choices: ["Spindle attachment checkpoint monitoring kinetochore tension", "DNA replication licensing", "G0 entry", "Apoptotic caspase activation only"], a: 0, exp: "Cells monitor proper biorientation of homologs before allowing disjunction. Lack of tension at kinetochores delays progression until attachments are corrected." },
      { q: "At the conclusion of Meiosis I, each chromosome is composed of:", choices: ["One chromatid", "Two sister chromatids still joined", "Four chromatids", "No chromatids"], a: 1, exp: "Sister chromatids remain together after homologs separate. Their separation is the task of Meiosis II." }
  ]
},
  {
  key: "W11_Ch11_Part2_MeiosisII",
  label: "W11 Lecture12 Ch11 Part 2 – Meiosis II & Comparison to Mitosis",
  questions: [
      { q: "What is separated during Meiosis II?", choices: ["Homologous chromosomes", "Sister chromatids", "Nucleoli", "Centrosomes"], a: 1, exp: "Meiosis II resembles a mitotic division applied to haploid cells. It resolves sister chromatids to yield unduplicated chromosomes." },
      { q: "If chromosomes decondensed after Telophase I, what occurs at Prophase II?", choices: ["Replication", "Recondensation and spindle reassembly", "Nuclear envelope builds permanently", "Cytokinesis reverses"], a: 1, exp: "Chromosomes recondense and new spindles form at opposite poles. The exact sequence can vary among species." },
      { q: "In Prometaphase II, each sister chromatid forms a kinetochore that:", choices: ["Attaches to microtubules from the same pole", "Attaches to microtubules from opposite poles (biorientation)", "Prevents microtubule binding", "Fuses chromatids"], a: 1, exp: "Biorientation ensures chromatids are pulled to opposite poles at Anaphase II. Proper attachment is essential for accurate segregation." },
      { q: "Metaphase II is characterized by:", choices: ["Alignment of homologous pairs", "Alignment of individual chromosomes on the metaphase plate", "No spindle present", "Nuclear membranes intact"], a: 1, exp: "Unlike Metaphase I, there are no paired homologs. Single chromosomes line up so their sisters can separate." },
      { q: "What triggers Anaphase II?", choices: ["Formation of chiasmata", "Proteolysis of centromeric cohesin allowing sister separation", "Nuclear envelope breakdown", "Spindle depolymerization"], a: 1, exp: "The anaphase-promoting complex targets cohesin so sister chromatids can move apart. This mirrors mitotic anaphase control but occurs in haploid cells." },
      { q: "The final outcome of Meiosis II from one cell entering it is:", choices: ["Two identical diploid cells", "Four genetically distinct haploid cells", "One tetraploid cell", "Two haploid cells only"], a: 1, exp: "Each of the two Meiosis I products divides again, separating sisters. The result is four haploid cells that often differ due to recombination and assortment." },
      { q: "Which feature differentiates Meiosis I from Meiosis II most directly?", choices: ["Presence of kinetochores", "Synapsis and reduction in ploidy occur only in Meiosis I", "Use of microtubules", "Chromosome condensation"], a: 1, exp: "Meiosis I halves chromosome number by disjoining homologs after synapsis and crossing over. Meiosis II simply separates sister chromatids." },
      { q: "Comparing meiosis to mitosis, which statement is correct?", choices: ["Both undergo two nuclear divisions", "Mitosis produces genetically identical cells; meiosis produces genetically diverse gametes", "Mitosis reduces ploidy; meiosis does not", "Meiosis occurs in somatic growth only"], a: 1, exp: "Mitosis conserves chromosome number and yields identical cells for growth. Meiosis introduces diversity and halves ploidy for sexual reproduction." },
      { q: "Random fertilization increases diversity because:", choices: ["All gametes are identical", "Any sperm can fuse with any egg, multiplying combinatorial possibilities", "Gametes select based on chromosome size", "Fertilization duplicates chromosomes again"], a: 1, exp: "Independent assortment and crossing over create diverse gametes. Random pairing of gametes further multiplies the number of possible zygotes." },
      { q: "In Telophase II, which events occur?", choices: ["Chromosomes condense to maximal levels", "Chromosomes arrive at poles, decondense, and nuclei reform", "Homologs pair again", "DNA replicates a third time"], a: 1, exp: "Telophase II reverses prior condensation and rebuilds nuclear envelopes. Cytokinesis then partitions each cell to produce haploid gametes." },
      { q: "Why are the four products of meiosis not genetically identical?", choices: ["Sister chromatids are exact copies and never recombine", "Crossing over and independent assortment create unique allele combinations", "Cytokinesis removes DNA", "Errors always occur"], a: 1, exp: "Recombination reshuffles segments among homologs and assortment mixes entire chromosomes. Thus, each gamete carries a distinct genetic makeup." },
      { q: "At the start of Meiosis II, the cell ploidy is:", choices: ["Diploid (2n)", "Haploid (1n) with duplicated chromosomes", "Tetraploid (4n)", "Haploid with unduplicated chromosomes"], a: 1, exp: "After Meiosis I, homologs are segregated so cells are haploid. However, each chromosome still consists of sister chromatids until Anaphase II." },
      { q: "Which checkpoint conceptually applies before Anaphase II?", choices: ["G1 DNA damage checkpoint", "Spindle assembly checkpoint ensuring biorientation of sisters", "S-phase replication checkpoint", "None"], a: 1, exp: "Cells verify that every chromatid is properly attached under tension. This minimizes nondisjunction and aneuploidy." },
      { q: "An error during Anaphase II that fails to separate sister chromatids leads directly to:", choices: ["Polyploid zygotes only", "Aneuploid gametes (n+1 or n-1)", "No change in gametes", "Triploid gametes"], a: 1, exp: "Nondisjunction in Meiosis II produces gametes with extra or missing chromosomes. Fertilization can then yield trisomy or monosomy in the zygote." },
      { q: "What mechanistic similarity is shared by Meiosis II and mitosis?", choices: ["Both disjoin homologs", "Both separate sister chromatids via cohesin cleavage", "Both double ploidy", "Both exclude spindle microtubules"], a: 1, exp: "Despite different biological roles, both processes resolve sisters using the same core machinery. The distinction is the starting ploidy." },
      { q: "When comparing alignment in Metaphase I vs. Metaphase II:", choices: ["Both align homologous pairs", "Metaphase I aligns homolog pairs; Metaphase II aligns single chromosomes", "Neither aligns chromosomes", "Metaphase II aligns tetrads"], a: 1, exp: "Only Meiosis I features tetrads. In Meiosis II, single chromosomes line up for separation of sisters." },
      { q: "The notation 1n -> 1n associated with Meiosis II indicates:", choices: ["A second reduction of ploidy", "Maintenance of haploid number while resolving sisters", "Increase to diploid", "Tripling of chromosome count"], a: 1, exp: "Meiosis II does not change chromosome number; it changes chromosome state from duplicated to unduplicated. Ploidy remains haploid." },
      { q: "How does recombination from Meiosis I influence Meiosis II outcomes?", choices: ["It has no effect", "It creates recombinant chromatids that segregate as sisters in Meiosis II, diversifying gametes", "It prevents spindle attachment in Meiosis II", "It forces identical chromatids"], a: 1, exp: "Crossovers exchange DNA between homologs in Meiosis I. These recombinant chromatids are then separated into different gametes during Meiosis II." },
      { q: "Which statement about centrosomes and spindles in Meiosis II is accurate?", choices: ["Spindles are unnecessary", "Centrosomes (if present) migrate to poles and nucleate bipolar spindles", "Only actin drives chromosome movement", "Kinetochores are absent"], a: 1, exp: "A bipolar spindle is essential for chromatid segregation. Microtubules attach to kinetochores and move chromatids poleward." },
      { q: "Why do many species show species-specific differences in Prophase II events?", choices: ["Because meiosis is optional", "Because whether chromosomes decondense and whether nuclear envelopes reform after Meiosis I varies among taxa", "Because microtubules are absent in some species", "Because DNA does not replicate"], a: 1, exp: "Some organisms briefly re-form nuclei and decondense chromosomes before Meiosis II, whereas others proceed directly. These variations reflect evolutionary differences." },
      { q: "Which best summarizes the role of Meiosis II in gametogenesis?", choices: ["Create diploid zygotes", "Resolve sister chromatids to produce mature haploid genomes", "Duplicate DNA again", "Select against recombinants"], a: 1, exp: "Meiosis II completes the division by separating sisters so each gamete carries one unduplicated copy of each chromosome. This finalizes gamete chromosome content." },
      { q: "Why does random fertilization create about 70 trillion combinations in humans?", choices: ["Because each parent contributes identical gametes", "Because each parent contributes one of ~8.4 million gametes derived from independent assortment, and combinations multiply", "Because crossing over is fixed", "Because mitosis contributes variants"], a: 1, exp: "Independent assortment alone produces ~8.4 million different gametes per parent (ignoring crossing over). Pairing any one sperm with any one egg multiplies possibilities." },
      { q: "In Telophase II and cytokinesis in plants vs. animals:", choices: ["Both use only cleavage furrows", "Plants build a cell plate while animals constrict a cleavage furrow", "Neither requires membranes", "Both rebuild synaptonemal complexes"], a: 1, exp: "As in mitosis and Meiosis I, plant cells assemble a cell plate to form new walls. Animal cells constrict with an actomyosin ring." },
      { q: "A cell enters Meiosis II with replicated chromosomes. Which step converts them to unreplicated state?", choices: ["Prophase II", "Anaphase II followed by Telophase II", "Metaphase II", "Interphase between meioses"], a: 1, exp: "Cohesin cleavage at Anaphase II separates sisters. Decondensation and nuclear reassembly in Telophase II leave each chromosome unduplicated." },
      { q: "If a nondisjunction event occurs in Meiosis I instead, the consequence for Meiosis II is:", choices: ["No change", "All chromatids in Meiosis II are mis-partitioned for that homolog, often producing two abnormal and two normal gametes", "Only one gamete is affected", "Chromosomes fuse"], a: 1, exp: "Failure to separate homologs in Meiosis I carries both copies into one Meiosis II cell. After Meiosis II, half the gametes are n+1 and half are n-1 for that chromosome." }
  ]
},
  {
  key: "W11_Ch11_Part3_LifeCycles",
  label: "W11 Lecture12 Ch11 Part 3 – Life Cycles & Sexual Reproduction",
  questions: [
      { q: "Which three life-cycle strategies are commonly highlighted for multicellular organisms?", choices: ["Diploid-only, triploid-only, bacterial", "Diploid-dominant, haploid-dominant, alternation of generations", "Asexual-only, sexual-only, cloning", "Larval-only, pupal-only, adult-only"], a: 1, exp: "Eukaryotes display different dominant phases across taxa. Animals are typically diploid-dominant, many fungi are haploid-dominant, and plants alternate between haploid and diploid stages." },
      { q: "In diploid-dominant life cycles (e.g., humans), the only haploid cells are:", choices: ["Somatic cells", "Gametes produced by meiosis in the gonads", "Liver cells", "Neurons"], a: 1, exp: "Germ cells undergo meiosis to make haploid sperm or eggs. There is no multicellular haploid stage." },
      { q: "In haploid-dominant life cycles (many fungi), the zygote typically:", choices: ["Undergoes mitosis to make a diploid organism", "Immediately undergoes meiosis to produce haploid spores", "Becomes a multicellular diploid plant", "Fuses with another zygote"], a: 1, exp: "Fusion of mating types creates a transient diploid zygote. It quickly enters meiosis to restore the haploid state and form spores." },
      { q: "Alternation of generations features which two multicellular stages?", choices: ["Sporangium and zygote", "Gametophyte (haploid) and sporophyte (diploid)", "Embryo and larva", "Capsid and virion"], a: 1, exp: "The gametophyte produces gametes by mitosis, and fertilization yields a diploid sporophyte. The sporophyte produces spores by meiosis that grow into gametophytes." },
      { q: "Why is meiosis not used to make gametes in the haploid gametophyte stage of plants?", choices: ["Because gametes are diploid", "Because the gametophyte is already haploid; gametes form by mitosis", "Because meiosis is impossible in plants", "Because spores are diploid"], a: 1, exp: "Meiosis would further reduce chromosome number from 1n to 0, which is not viable. Haploid organisms produce gametes by ordinary mitotic divisions." },
      { q: "Random fertilization contributes to diversity by:", choices: ["Selecting identical parents", "Allowing any sperm to fuse with any egg to create unique zygotes", "Preventing crossing over", "Eliminating independent assortment"], a: 1, exp: "The union of two independently assorted gametes multiplies possible genotypes. Crossing over adds even more combinations." },
      { q: "Which statement about asexual vs. sexual reproduction is most accurate?", choices: ["Asexual reproduction always yields greater diversity", "Sexual reproduction mixes chromosomes from two parents to generate variation", "Asexual reproduction requires meiosis", "Sexual reproduction clones the parent"], a: 1, exp: "Sexual reproduction introduces recombination and independent assortment. Asexual reproduction produces genetically identical offspring aside from mutations." },
      { q: "In animals, germ cells located in gonads primarily divide by:", choices: ["Meiosis to produce gametes, with mitosis to maintain the lineage", "Mitosis only", "Binary fission", "Budding"], a: 0, exp: "Self-renewing mitoses maintain the germline, while specialized cells enter meiosis to generate sperm or eggs. This preserves the lineage and produces gametes." },
      { q: "In fungi, mating types (+ and -) fuse to form a zygote that:", choices: ["Becomes a diploid multicellular adult", "Undergoes meiosis to produce recombinant haploid spores", "Skips meiosis and divides by mitosis only", "Forms gametes directly"], a: 1, exp: "Meiosis restores the haploid-dominant condition and spreads genetic variants via spores. Spores then germinate and grow into new haploid individuals." },
      { q: "In alternation of generations, spores are produced by the:", choices: ["Gametophyte via mitosis", "Sporophyte via meiosis", "Zygote via mitosis", "Egg via meiosis"], a: 1, exp: "The diploid sporophyte uses meiosis to generate haploid spores. These spores develop into haploid gametophytes." },
      { q: "Which stage produces gametes in plants?", choices: ["Sporophyte by meiosis", "Gametophyte by mitosis", "Zygote by meiosis", "Spore by meiosis"], a: 1, exp: "Since the gametophyte is already haploid, mitosis can produce haploid gametes directly. Meiosis is not required to reduce ploidy at this stage." },
      { q: "Why is sexual reproduction advantageous in changing environments?", choices: ["It guarantees all offspring are identical", "It creates genetic combinations that may increase survival under new conditions", "It prevents new mutations", "It ensures polyploidy in all cases"], a: 1, exp: "Variation generated by recombination, assortment, and fertilization provides raw material for selection. Populations can adapt more readily when genotypes differ." },
      { q: "Which is TRUE about the zygote in diploid-dominant life cycles?", choices: ["It is haploid until first mitosis", "It is diploid and undergoes mitosis to build the multicellular organism", "It immediately undergoes meiosis", "It remains a spore"], a: 1, exp: "Fertilization fuses two haploid gametes to produce a diploid zygote. Repeated mitoses develop the embryo and adult." },
      { q: "Which life-cycle strategy includes a multicellular haploid stage?", choices: ["Diploid-dominant only", "Haploid-dominant and alternation of generations", "Neither strategy", "All strategies lack haploid stages"], a: 1, exp: "Fungi and some algae are primarily haploid, and plants carry a multicellular gametophyte. Animals lack a multicellular haploid phase." },
      { q: "What is the role of spores in alternation of generations?", choices: ["They are diploid gametes", "They are haploid cells that grow into gametophytes", "They fertilize eggs", "They are multicellular embryos"], a: 1, exp: "Spores are single haploid cells produced by meiosis in the sporophyte. They germinate and develop into haploid gametophytes by mitosis." },
      { q: "In diploid-dominant species, why is there no multicellular haploid stage?", choices: ["Because meiosis makes diploid gametes", "Because haploid cells (gametes) fuse quickly after formation", "Because mitosis is impossible in haploid cells", "Because spores replace gametes"], a: 1, exp: "Only single-celled gametes are haploid in animals, and they unite during fertilization. The organism develops as diploid." },
      { q: "A key distinction between spores and gametes is that spores:", choices: ["Must fuse to form a zygote", "Can grow into a new organism without fusing", "Are always diploid", "Do not undergo mitosis"], a: 1, exp: "Spores germinate directly to form the next haploid generation. Gametes must fuse with another gamete to continue the life cycle." },
      { q: "In haploid-dominant life cycles, most mitotic divisions occur in the:", choices: ["Diploid phase", "Haploid phase", "Triploid phase", "None; mitosis is absent"], a: 1, exp: "The vegetative body is typically haploid; growth and development occur via mitosis of haploid cells. Diploidy is brief and limited to the zygote." },
      { q: "Which process creates the sporophyte generation from the gametophyte in plants?", choices: ["Meiosis", "Fertilization followed by mitosis", "Binary fission", "Apoptosis"], a: 1, exp: "Fusion of haploid gametes creates a diploid zygote that divides by mitosis to form the multicellular sporophyte. The sporophyte then produces spores by meiosis." },
      { q: "Why do multicellular organisms that rely only on asexual reproduction tend to have less genetic variation?", choices: ["They lack meiosis and fertilization that reshuffle alleles", "They mutate more slowly", "They have no chromosomes", "They cannot divide by mitosis"], a: 0, exp: "Asexual lineages copy the same genome each generation except for new mutations. Sexual reproduction mixes alleles from different parents, accelerating diversity." },
      { q: "In animals, where are meiosis and gamete production localized?", choices: ["Leaves and stems", "Gonads such as testes and ovaries", "Liver and kidney", "Skin epidermis"], a: 1, exp: "Specialized tissues called gonads house the germline. Cells there commit to meiosis to produce gametes." },
      { q: "Which statement links life-cycle strategy to genetic diversity?", choices: ["Diploid-dominant cycles cannot generate diversity", "All three strategies can generate diversity through meiosis and fertilization, though timing differs", "Only plants can recombine genes", "Only fungi use crossing over"], a: 1, exp: "Regardless of the dominant stage, meiosis introduces recombination and independent assortment. Fertilization further mixes genomes." },
      { q: "What immediately follows spore formation in alternation of generations?", choices: ["Spore fusion", "Spore germination and mitotic growth into a gametophyte", "Meiosis again", "Return to sporophyte without division"], a: 1, exp: "Spores germinate to form the haploid gametophyte. This establishes the next generation in the cycle." },
      { q: "Which life-cycle statement is FALSE?", choices: ["Animals are typically diploid-dominant", "Many fungi and some algae are haploid-dominant", "Plants lack a diploid stage", "Plants alternate between haploid and diploid generations"], a: 2, exp: "Plants have both diploid (sporophyte) and haploid (gametophyte) phases. The diploid stage is often the conspicuous plant in many groups." },
      { q: "Which event restores diploidy in all sexual life cycles?", choices: ["Meiosis", "Fertilization (syngamy)", "Mitosis", "Spore germination"], a: 1, exp: "Fertilization fuses two haploid gametes to produce a diploid zygote. This complements meiosis, which reduces ploidy." }
  ]
},

{
  key: "W10_Lab17_18_Combined",
  label: "W10 Lab 17–18 – Bacterial Transformation & Recombinant DNA (Combined)",
  questions: [
    { q: "What is a plasmid in bacterial cells?", choices: ["An RNA virus", "A small extrachromosomal DNA molecule that replicates independently", "A membrane vesicle", "A chromosomal protein"], a: 1, exp: "Plasmids are circular DNA molecules separate from the main chromosome that can replicate on their own. They often carry accessory genes such as antibiotic resistance, providing selective advantages." },
    { q: "R‑plasmids commonly carry genes that confer resistance to:", choices: ["Sucrose", "Antibiotics such as ampicillin, tetracycline, or penicillin", "UV light", "Ethanol"], a: 1, exp: "Resistance plasmids encode enzymes like β‑lactamases that inactivate β‑lactam antibiotics. This allows transformed bacteria to survive on media containing the drug." },
    { q: "Bacterial transformation is defined as:", choices: ["Transfer of traits via mating pili", "Uptake and expression of foreign DNA by bacterial cells", "Virus‑mediated DNA transfer only", "Spontaneous mutation accumulation"], a: 1, exp: "Transformation introduces exogenous DNA into competent cells. If the DNA carries selectable markers, the new genes can be expressed to yield a detectable phenotype." },
    { q: "In the lab exercise, which plasmid confers ampicillin resistance?", choices: ["pBLU", "pAMP", "pGLO only", "pLacZ"], a: 1, exp: "The protocol specifies pAMP as the plasmid carrying an Amp^R gene. Cells that take up pAMP can grow on ampicillin plates." },
    { q: "Which plates should show growth only for cells that acquired the plasmid?", choices: ["LB‑", "LB/Amp‑", "LB/Amp+", "LB+"], a: 2, exp: "Ampicillin in LB/Amp selects for transformants. Only cells that express β‑lactamase from the plasmid survive on the LB/Amp+ plate, whereas non‑transformed cells are killed." },
    { q: "Purpose of the LB‑ plate:", choices: ["Select for transformants", "Demonstrate that cells are viable without antibiotic", "Provide a negative control for media sterility only", "Measure plasmid concentration"], a: 1, exp: "LB without antibiotic tests whether the cells are alive and capable of forming colonies in the absence of selection. It serves as a growth control for the transformation procedure." },
    { q: "Purpose of the LB/Amp‑ plate:", choices: ["Positive control for transformation", "Negative control showing non‑transformed cells cannot grow with ampicillin", "Measure ligase activity", "Induce competence"], a: 1, exp: "Cells that did not receive plasmid DNA are plated on LB/Amp. Absence of colonies verifies that ampicillin effectively kills Amp‑sensitive bacteria and that resistance arises from plasmid uptake." },
    { q: "Chemical used to prepare competent cells in this protocol:", choices: ["NaCl", "0.05 M CaCl₂", "KOH", "MgSO₄ only"], a: 1, exp: "Cold calcium chloride helps neutralize membrane charge and facilitates DNA binding to the cell surface. This primes cells for heat‑shock mediated uptake." },
    { q: "Why is a rapid 42 °C heat‑shock applied for ~90 s?", choices: ["To denature β‑lactamase", "To create a thermal imbalance that drives DNA into competent cells", "To sterilize the culture", "To activate HindIII"], a: 1, exp: "The sudden temperature change increases membrane permeability and promotes DNA uptake. Immediately returning tubes to ice helps stabilize the membranes after entry." },
    { q: "What occurs during the 10‑minute recovery in LB at room temperature?", choices: ["Cells lose the plasmid", "Cells express the AmpR gene so β‑lactamase can be produced", "Antibiotic diffuses into plates", "DNA is cut by HindIII"], a: 1, exp: "Recovery allows transcription and translation of the resistance gene before exposure to ampicillin. This step improves survival of true transformants on selective media." },
    { q: "Which enzyme provides ampicillin resistance by cleaving the β‑lactam ring?", choices: ["β‑galactosidase", "β‑lactamase", "Ligase", "HindIII"], a: 1, exp: "β‑lactamase (encoded by AmpR) hydrolyzes the β‑lactam bond, inactivating the antibiotic. This biochemical activity underlies selection on LB/Amp plates." },
    { q: "Competent bacteria are:", choices: ["Always naturally transformable", "Cells that can take up DNA; competence can be natural or induced chemically", "Only eukaryotic cells", "Dead cells that adsorb DNA"], a: 1, exp: "Some species are naturally competent, while others can be made competent by chemical treatment and temperature shifts. Competence is the key physiological state enabling transformation." },
    { q: "Why do we label tubes '+' and '-' during the setup?", choices: ["To mark different antibiotics", "To distinguish the plasmid‑DNA tube ('+') from the no‑DNA control ('-')", "For incubation order", "To indicate colony colors"], a: 1, exp: "Keeping the plasmid‑containing tube separate from the negative control prevents mix‑ups. It also clarifies which samples should be able to grow on selective plates." },
    { q: "Where are labels written on petri dishes?", choices: ["On lids", "On plate bottoms (bases)", "On tape only", "Labels are unnecessary"], a: 1, exp: "Marking the base ensures labels stay with the culture even if lids are swapped. It also keeps orientation consistent during incubation and observation." },
    { q: "Why are plates incubated inverted (lid down)?", choices: ["To keep colonies flat", "To prevent condensation from dripping onto the agar surface and spreading cells", "To warm them evenly", "To avoid oxygen exposure"], a: 1, exp: "Inverting plates reduces condensation that can blur streaks or cause colony run‑together. This improves counting and isolation quality." },
    { q: "What is transformation efficiency?", choices: ["Colonies per mL of LB", "Number of antibiotic‑resistant colonies per microgram of plasmid DNA plated", "Fraction of cells surviving on LB", "Time to first colony"], a: 1, exp: "Efficiency quantifies how effectively DNA is introduced and expressed. It normalizes colony counts to the mass of DNA actually spread so groups can compare results meaningfully." },
    { q: "Given pAMP stock 0.2 µg/µL and 10 µL added, how many micrograms were added to the '+' tube?", choices: ["0.2 µg", "2.0 µg", "20 µg", "0.02 µg"], a: 1, exp: "Mass = concentration × volume = 0.2 µg/µL × 10 µL = 2.0 µg. This value is then diluted by the total recovery volume before plating." },
    { q: "Total recovery volume after adding LB is (250 µL CaCl₂ + 10 µL DNA + 250 µL LB). What is it?", choices: ["260 µL", "510 µL", "100 µL", "750 µL"], a: 1, exp: "Volumes add to 510 µL. Knowing the final volume allows calculation of the plasmid concentration during plating." },
    { q: "If 100 µL of the '+' suspension is plated, what fraction of the DNA is plated?", choices: ["1/5.1", "1/2", "1/10", "All of it"], a: 0, exp: "100 µL out of 510 µL equals approximately 0.196 (≈1/5.1). Multiplying this fraction by the original DNA mass gives the micrograms of DNA actually plated." },
    { q: "Which plate should be used to calculate transformation efficiency?", choices: ["LB‑", "LB+", "LB/Amp‑", "LB/Amp+"], a: 3, exp: "Only LB/Amp+ contains selective antibiotic and transformed cells from the '+' tube. Counting resistant colonies on this plate supports the colonies/µg DNA calculation." },
    { q: "Role of sterile technique when flaming a spreader or loop:", choices: ["It colors the colonies", "It reduces contamination by killing adherent microbes", "It cools the agar", "It increases mutation rate"], a: 1, exp: "Brief flaming sterilizes instruments to prevent introducing unwanted organisms. After heating, the tool must be cooled before touching cells or agar." },
    { q: "Why immediately return tubes to ice after heat‑shock?", choices: ["To stop all metabolism", "To reduce membrane fluidity and stabilize DNA association post‑entry", "To precipitate DNA", "To denature proteins"], a: 1, exp: "Rapid cooling helps close the transient pores and reduces leakage. This increases viability and improves transformation yield." },
    { q: "If colonies appear on the LB/Amp‑ plate (negative control), what most likely happened?", choices: ["Successful transformation", "Antibiotic failed or contamination occurred", "Heat‑shock was too short", "Cells were dead"], a: 1, exp: "Growth on LB/Amp‑ suggests the antibiotic was ineffective or resistant contaminants were present. Proper controls help diagnose such issues." },
    { q: "Purpose of labeling plates with temperature '37 °C':", choices: ["For color coding", "To indicate incubation conditions for E. coli growth", "To track plasmid", "To set pH"], a: 1, exp: "E. coli grows optimally near 37 °C, and the label documents conditions. Consistent temperature ensures comparable results across groups." },
    { q: "A conjugation event differs from transformation because:", choices: ["It uses bacteriophages", "It requires cell‑to‑cell contact via pilus", "It relies on heat‑shock entry", "It cannot transfer plasmids"], a: 1, exp: "Conjugation transfers DNA through direct contact and a conjugation pilus. Transformation does not require mating pairs and uses extracellular DNA." },
    { q: "HindIII recognizes which sequence when modeling restriction digests?", choices: ["GAATTC", "AAGCTT", "GGATCC", "CCCGGG"], a: 1, exp: "HindIII cuts at AAGCTT producing sticky ends. The lab’s paper exercise uses this site to illustrate cohesive ligation into plasmid backbones." },
    { q: "Sticky ends are useful because they:", choices: ["Prevent ligation", "Base‑pair with complementary overhangs to guide ligase‑mediated joining", "Destroy enzymes", "Eliminate need for ATP"], a: 1, exp: "Cohesive overhangs increase the efficiency and specificity of plasmid‑insert joining. Ligase then covalently seals the sugar‑phosphate backbone." },
    { q: "Which enzyme is used to covalently join DNA fragments during cloning?", choices: ["DNA ligase", "β‑lactamase", "RNA polymerase", "Topoisomerase I"], a: 0, exp: "Ligase forms phosphodiester bonds between adjacent DNA ends. It completes the recombinant molecule after annealing of sticky ends." },
    { q: "Why must the spreader be cooled on agar before use after flaming?", choices: ["To speed colony growth", "To avoid killing cells and gouging the agar surface", "To label plates", "To sterilize again"], a: 1, exp: "A hot spreader can kill the sample and melt the agar. Touching to a sterile part of the plate cools it without contamination." },
    { q: "Which statement about CaCl₂ competence is correct?", choices: ["It inserts the plasmid into the chromosome", "It helps neutralize negative charges on DNA and the cell surface", "It digests cell walls", "It activates β‑galactosidase"], a: 1, exp: "Divalent cations like Ca²⁺ shield electrostatic repulsion between DNA and the membrane. This facilitates binding prior to heat‑shock entry." },
    { q: "During labeling, why include sample identity and date?", choices: ["For decoration", "To ensure traceability of samples and conditions", "To improve transformation efficiency directly", "To align plates"], a: 1, exp: "Clear labels let you interpret results days later and avoid mix‑ups. They are essential parts of good laboratory practice." },
    { q: "If the '+' LB plate shows no growth but LB/Amp+ shows many colonies, what is likely?", choices: ["Mislabeling of plates", "All cells died", "Antibiotic evaporated", "Normal expected outcome"], a: 0, exp: "Transformed cells cannot reasonably grow on LB/Amp+ if the same sample fails on LB+, so labeling or plating errors are suspected. Controls should agree logically." },
    { q: "Why are natural competence and chemically induced competence both mentioned?", choices: ["To show only one works", "To explain that uptake ability can be innate or laboratory‑induced", "To discourage transformation", "To define conjugation"], a: 1, exp: "Some bacteria can naturally uptake DNA, while others are rendered competent by treatments such as CaCl₂ and heat‑shock. The protocol highlights both possibilities." },
    { q: "What is the expected outcome on LB/Amp+ for the '-' sample?", choices: ["Lawn of growth", "No colonies", "Mixed lawn", "Blue colonies"], a: 1, exp: "The negative control lacks plasmid DNA, so it should remain ampicillin‑sensitive and fail to form colonies. Any growth indicates a control problem." },
    { q: "Why are antibiotic‑resistant colonies counted rather than total cells plated when computing efficiency?", choices: ["Total cells cannot be counted", "Only resistant colonies demonstrate successful DNA uptake and expression", "It is faster", "They are larger"], a: 1, exp: "Transformation efficiency measures successful transformants per µg DNA, not all survivors. Counting only resistant colonies reflects the selected phenotype." },
    { q: "Which safety practice is emphasized when flaming ethanol on spreaders?", choices: ["Hold in ethanol longer", "Briefly flame, then allow ethanol to burn off and cool before use", "Wave the plate through flame", "Skip cooling"], a: 1, exp: "The flame sterilizes by burning off ethanol; using the tool while hot is dangerous and damaging. Cooling preserves cells and agar integrity." },
    { q: "A colony on LB/Amp+ originates from:", choices: ["A single transformed cell that divided repeatedly", "Many cells at once", "A virus particle", "A dead cell"], a: 0, exp: "Each colony typically arises clonally from one viable transformant. This makes colony counts a good proxy for individual transformation events." },
    { q: "If too many colonies to count are present, the protocol suggests:", choices: ["Ignore the plate", "Estimate by counting a section and multiplying by total sections", "Assume 1000", "Start over only"], a: 1, exp: "Counting a representative fraction and scaling allows estimation without replating. This keeps the efficiency calculation feasible." },
    { q: "The term 'β‑lactam' in β‑lactamase refers to:", choices: ["A sugar ring", "The four‑membered lactam ring in penicillins and related antibiotics", "A peptide motif in ribosomes", "A lipid headgroup"], a: 1, exp: "Ampicillin’s activity depends on its β‑lactam ring which inhibits cell‑wall synthesis. β‑Lactamase breaks this ring, inactivating the drug." },
    { q: "Why does immediate mixing of plasmid with the '+' cells matter?", choices: ["To shear DNA", "To maximize contact between DNA and competent cells", "To aerate medium", "To sterilize DNA"], a: 1, exp: "Rapid and thorough mixing increases the chance of DNA binding to the prepared cell surfaces before competence diminishes. This improves transformation success." }
  ]
},

{
  key: "W11_Lab19_Mitosis",
  label: "W11 Lab 19 — Mitosis (Intro, Exercise & Lab Report)",
  questions: [
    {
      q: "During which phase of the cell cycle does DNA replication occur?",
      choices: ["G1", "S phase", "G2", "M phase"],
      a: 1,
      exp: "S phase (synthesis) duplicates DNA so each chromosome consists of two sister chromatids before mitosis."
    },
    {
      q: "What best describes chromosomes during most of interphase?",
      choices: ["Highly condensed and visible", "Decondensed chromatin not individually visible", "Attached to spindle fibers", "Attached at the metaphase plate"],
      a: 1,
      exp: "Chromosomes are decondensed as chromatin; the nucleus and nucleolus are visible during interphase."
    },
    {
      q: "Which sequence lists the mitotic phases in order?",
      choices: ["Metaphase → Prophase → Anaphase → Telophase", "Prophase → Metaphase → Anaphase → Telophase", "Prophase → Anaphase → Metaphase → Telophase", "Interphase → Cytokinesis → Mitosis"],
      a: 1,
      exp: "Mitosis proceeds Prophase, Metaphase, Anaphase, Telophase (PMAT); cytokinesis typically follows telophase."
    },
    {
      q: "What structure attaches spindle fibers to chromosomes?",
      choices: ["Centrosome", "Kinetochore on the centromere", "Nucleolus", "Telomere"],
      a: 1,
      exp: "Kinetochore microtubules attach at the kinetochore, a protein complex on the centromere."
    },
    {
      q: "In animal cells, cytokinesis is characterized by the formation of a:",
      choices: ["Cell plate", "Cleavage furrow", "Middle lamella", "Phragmoplast"],
      a: 1,
      exp: "Actin–myosin constriction forms a cleavage furrow that pinches the cell into two daughter cells."
    },
    {
      q: "In plant cells, cytokinesis proceeds by forming a:",
      choices: ["Cleavage furrow", "Contractile ring", "Cell plate from vesicles", "Microfilament belt"],
      a: 2,
      exp: "Membrane-bound vesicles coalesce at the equator to form a cell plate that becomes the new cell wall."
    },
    {
      q: "When do centrosomes duplicate in animal cells?",
      choices: ["During S/G2 of interphase", "During prophase", "During metaphase", "During cytokinesis"],
      a: 0,
      exp: "The centrosome (pair of centrioles) duplicates in interphase so two poles can form for mitosis."
    },
    {
      q: "Which is TRUE of sister chromatids?",
      choices: ["They are homologous chromosomes from each parent", "They are identical copies joined at a centromere", "They exist only in meiosis", "They are different lengths in a pair"],
      a: 1,
      exp: "After S phase each replicated chromosome has two identical sister chromatids joined at the centromere."
    },
    {
      q: "Homologous chromosomes are best defined as:",
      choices: ["Two identical chromatids", "Chromosomes with same genes and loci, one maternal and one paternal", "Duplicated chromosomes after S phase", "Any two chromosomes of a cell"],
      a: 1,
      exp: "A homologous pair has the same gene order; one is inherited from each parent."
    },
    {
      q: "A diploid human somatic cell contains:",
      choices: ["One copy of each chromosome (n)", "Two copies of each chromosome (2n)", "Four copies of each chromosome (4n)", "No chromosomes"],
      a: 1,
      exp: "Somatic cells are diploid (2n), with homologous pairs; gametes are haploid (n)."
    },
    {
      q: "During prophase, which changes occur?",
      choices: ["Nuclear envelope reforms; chromosomes decondense", "Chromatin condenses; nucleolus disappears; spindle begins to form", "Sister chromatids separate", "Cell plate appears"],
      a: 1,
      exp: "Chromatin condenses into visible chromosomes, nucleoli disappear, and spindle apparatus begins forming."
    },
    {
      q: "Prometaphase is marked by:",
      choices: ["Nuclear envelope intact and chromosomes decondensed", "Nuclear envelope breakdown and kinetochore attachment", "Sister chromatid separation", "Cleavage furrow formation"],
      a: 1,
      exp: "After nuclear envelope breakdown, kinetochore microtubules attach to chromosomes."
    },
    {
      q: "What is the metaphase plate?",
      choices: ["A rigid cellular structure", "The equatorial plane where chromosomes align", "A set of ER membranes", "A centriole pair"],
      a: 1,
      exp: "It is an imaginary plane at the cell equator where replicated chromosomes align before separation."
    },
    {
      q: "What event defines the onset of anaphase?",
      choices: ["Condensation of chromatin", "Breakdown of the nuclear membrane", "Separation of sister chromatids at centromeres", "Formation of the nucleolus"],
      a: 2,
      exp: "Centromeres divide and sister chromatids are pulled to opposite poles via shortening kinetochore microtubules."
    },
    {
      q: "Polar (non-kinetochore) microtubules during anaphase:",
      choices: ["Shorten to pull chromatids", "Elongate and push poles apart", "Disassemble completely", "Attach to telomeres"],
      a: 1,
      exp: "Non-kinetochore microtubules lengthen and overlap, contributing to spindle elongation."
    },
    {
      q: "Which statement about telophase is correct?",
      choices: ["Nuclear envelopes dissolve", "Chromosomes condense further", "Nuclear envelopes re-form; chromosomes begin to decondense", "Kinetochore microtubules attach"],
      a: 2,
      exp: "Telophase restores nuclei at each pole and chromosomes relax back to chromatin."
    },
    {
      q: "In the modeling exercise with pop beads, a diploid cell is represented as:",
      choices: ["2n = 2 (one homologous pair)", "2n = 4 (two homologous pairs)", "2n = 6", "n = 4"],
      a: 1,
      exp: "The exercise models a diploid cell with 4 chromosomes total (two homologous pairs)."
    },
    {
      q: "In the pop-bead model, during S phase you should:",
      choices: ["Remove centromeres", "Build an identical strand for each chromosome to make sister chromatids", "Move chromosomes to the metaphase plate", "Erase spindle fibers"],
      a: 1,
      exp: "S phase duplicates DNA, producing sister chromatids joined at a centromere."
    },
    {
      q: "Which correctly distinguishes animal and plant mitosis (microscopy slides)?",
      choices: ["Animal cells show cell plates; plant cells show cleavage furrows", "Animal cells possess centrioles and cleavage furrows; plant cells form cell plates", "Both form cleavage furrows", "Only plant cells have spindle fibers"],
      a: 1,
      exp: "Animals use a contractile ring to create a cleavage furrow; plants assemble a cell plate from Golgi-derived vesicles."
    },
    {
      q: "In whitefish blastula and onion root tips, cells in which stage are typically most abundant?",
      choices: ["Anaphase", "Metaphase", "Interphase", "Telophase"],
      a: 2,
      exp: "Most cells are in interphase; mitotic phases are comparatively brief."
    },
    {
      q: "Kinetochore microtubules originate from:",
      choices: ["Centrosomes (spindle poles)", "Nucleolus", "Endoplasmic reticulum", "Ribosomes"],
      a: 0,
      exp: "They emanate from centrosomes at opposite poles and connect to kinetochores."
    },
    {
      q: "Which feature is used to identify cytokinesis in an animal cell micrograph?",
      choices: ["Cell plate", "Cleavage furrow indentation", "Metaphase plate", "Spindle pole bodies"],
      a: 1,
      exp: "A constriction (cleavage furrow) indicates the contractile ring pinching the cell."
    },
    {
      q: "After telophase is complete, each new nucleus contains:",
      choices: ["Half the number of chromosomes as G1", "The same number of chromosomes as the original parent cell", "Double the chromosomes", "No chromosomes until S phase"],
      a: 1,
      exp: "Mitosis produces two genetically identical nuclei with the same chromosome number as the parent."
    },
    {
      q: "Which best describes diploid and haploid states?",
      choices: ["Diploid (2n) has one of each chromosome; haploid (n) has pairs", "Diploid (2n) has pairs of homologs; haploid (n) has one of each", "Both have pairs", "Neither has homologs"],
      a: 1,
      exp: "Diploid cells have homologous pairs; haploid cells carry a single set."
    },
    {
      q: "In the modeling instructions, prometaphase includes:",
      choices: ["Centrosomes at same pole and intact nucleus", "Complete nuclear envelope breakdown and kinetochore attachment", "Chromosomes aligned at poles", "Cleavage furrow formation"],
      a: 1,
      exp: "Prometaphase follows nuclear envelope breakdown and involves kinetochore capture."
    },
    {
      q: "What makes up the mitotic spindle fibers?",
      choices: ["Actin microfilaments", "Intermediate filaments", "Microtubules (tubulin)", "Collagen fibers"],
      a: 2,
      exp: "The spindle is composed of microtubules assembled from tubulin dimers."
    },
    {
      q: "During metaphase in your bead model, you should:",
      choices: ["Pile chromosomes at poles", "Align centromeres on an imaginary equatorial plane", "Erase all spindle fibers", "Duplicate centrosomes again"],
      a: 1,
      exp: "Chromosomes line up at the metaphase plate with centromeres on the equator."
    },
    {
      q: "Anaphase ends when:",
      choices: ["Chromosomes reach opposite poles", "Nuclear envelope reforms", "Chromatin decondenses", "Cytokinesis begins"],
      a: 0,
      exp: "Anaphase concludes once daughter chromosomes arrive at opposite spindle poles."
    },
    {
      q: "In the Lab 19 timing table, what fraction estimates time spent in a stage?",
      choices: ["(Total cells ÷ cells in stage) × 1440", "(Cells in stage ÷ total cells) × 1440 minutes", "(Cells in stage × total cells) ÷ 1440", "1440 ÷ total cells"],
      a: 1,
      exp: "The proportion of cells in a stage approximates the fraction of the cell cycle spent there; multiply by 1440 min/day."
    },
    {
      q: "Which is a key difference between homologous chromosomes and sister chromatids?",
      choices: ["Homologs are identical copies after S phase; sisters are from each parent", "Sisters are identical copies; homologs are similar but may carry different alleles", "Both are identical copies", "Homologs are joined at a centromere"],
      a: 1,
      exp: "Sister chromatids are identical duplicates; homologs are similar but not identical and come from different parents."
    },
    {
      q: "Which observation indicates mitosis (not meiosis) in these exercises?",
      choices: ["Separation of homologous chromosomes in Anaphase I", "Production of four non-identical gametes", "Maintenance of chromosome number in two identical daughter cells", "Crossing over between homologs"],
      a: 2,
      exp: "Mitosis conserves chromosome number and yields two genetically identical daughter cells."
    }
  ]
},





{
  key: "W11_Lab20_Meiosis",
  label: "W11 Lab 20 — Meiosis (Intro + Exercise)",
  questions: [
    { q: "What is the defining outcome of meiosis compared with mitosis?", choices: ["Two identical diploid daughter cells", "Two identical haploid daughter cells", "Four genetically distinct haploid daughter cells", "Four genetically identical diploid cells"], a: 2, exp: "Meiosis produces four non-identical haploid gametes via two divisions with one round of DNA replication, increasing genetic diversity." },
    { q: "Where does meiosis occur in animals?", choices: ["Somatic tissues of the body", "Gonads (testes/ovaries)", "Liver cells", "Immune cells"], a: 1, exp: "Meiosis is restricted to germ cells in the gonads to form gametes (eggs or sperm)." },
    { q: "How many rounds of DNA replication occur during meiosis?", choices: ["None", "One, before Meiosis I", "Two, before each division", "Continuous replication between I and II"], a: 1, exp: "DNA replicates once during S phase prior to Meiosis I; there is no S phase between Meiosis I and II." },
    { q: "How many nuclear divisions are in meiosis?", choices: ["One", "Two", "Three", "Four"], a: 1, exp: "Meiosis consists of Meiosis I (reductional) and Meiosis II (equational)." },
    { q: "At the end of Meiosis I, the chromosome number is reduced from:", choices: ["n → 2n", "2n → n", "n → 0", "2n → 4n"], a: 1, exp: "Homologous chromosomes separate, producing haploid (n) cells even though chromosomes are still duplicated (sister chromatids remain together)." },
    { q: "Which stage features pairing (synapsis) of homologous chromosomes and crossing over?", choices: ["Prophase I", "Metaphase I", "Anaphase II", "Telophase II"], a: 0, exp: "In Prophase I, homologs form tetrads and non-sister chromatids exchange equivalent segments (crossing over)." },
    { q: "A tetrad consists of:", choices: ["Two chromosomes, each a single chromatid", "Two homologous chromosomes, each with two sister chromatids (four chromatids total)", "A single duplicated chromosome", "Four non-homologous chromosomes"], a: 1, exp: "Synapsis brings two homologs together; each homolog has two sister chromatids, totaling four chromatids—hence ‘tetrad’." },
    { q: "What separates during Anaphase I of meiosis?", choices: ["Sister chromatids", "Homologous chromosomes", "Chromosome arms only", "Centromeres of sister chromatids"], a: 1, exp: "Centromeres do not split in Anaphase I; homologs move to opposite poles. Sister chromatids separate in Anaphase II." },
    { q: "What aligns on the metaphase plate during Metaphase I?", choices: ["Individual chromosomes with kinetochores of sisters facing opposite poles", "Tetrads (paired homologs) with homologs on opposite sides of the plate", "Only chromatids", "Telomeres"], a: 1, exp: "Pairs of homologs line up as tetrads; orientation of each pair is independent of the others." },
    { q: "Independent assortment refers to:", choices: ["Random separation of sister chromatids", "Random orientation of each homologous pair at Metaphase I", "Random DNA replication", "Random spindle formation"], a: 1, exp: "Each tetrad orients independently at Metaphase I, mixing maternal/paternal chromosomes into gametes." },
    { q: "Crossing over produces genetic variation by:", choices: ["Changing ploidy", "Exchanging equivalent DNA segments between non-sister chromatids", "Duplicating entire genomes", "Deleting centromeres"], a: 1, exp: "Reciprocal exchange creates new allele combinations along chromosomes." },
    { q: "In the modeling exercise (2n = 4), how many homologous pairs are built?", choices: ["1", "2", "3", "4"], a: 1, exp: "A diploid with 2n = 4 has two homologous pairs; the lab uses pop-bead long pair plus sex chromosomes X/Y." },
    { q: "In the model, what do the magnetic pieces represent?", choices: ["Telomeres", "Centromeres/kinetochores", "Spindle poles", "Actin rings"], a: 1, exp: "Magnetic connectors stand in for centromeres where sister chromatids join and microtubules attach via kinetochores." },
    { q: "Which statement about Meiosis II is correct?", choices: ["It includes DNA replication", "It resembles mitosis: sister chromatids separate", "It separates homologous chromosomes", "It restores diploidy"], a: 1, exp: "Meiosis II is an equational division separating sister chromatids without prior replication." },
    { q: "At the completion of Meiosis II, the products are:", choices: ["Two diploid cells", "Two haploid cells", "Four haploid cells", "Four diploid cells"], a: 2, exp: "Meiosis yields four haploid cells (gametes), often genetically distinct due to crossing over and independent assortment." },
    { q: "During Metaphase II, chromosomes align:", choices: ["As tetrads", "As individual duplicated chromosomes at each equator", "Randomly at cell edges", "Only near centrosomes"], a: 1, exp: "Each haploid cell aligns its chromosomes singly on the metaphase plate; sister chromatids will separate in Anaphase II." },
    { q: "Which best distinguishes Anaphase I from Anaphase II?", choices: ["Nuclear envelope breakdown occurs", "Homologs separate in I; sister chromatids separate in II", "Cytokinesis occurs only in I", "Spindle microtubules shorten only in II"], a: 1, exp: "The key mechanistic difference is which units separate." },
    { q: "In humans, the haploid number n equals:", choices: ["12", "23", "46", "92"], a: 1, exp: "Humans have n = 23; thus 2n = 46 in diploid somatic cells." },
    { q: "The random orientation of homologs at Metaphase I most directly explains:", choices: ["Crossing over", "Independent assortment of chromosomes", "DNA replication fidelity", "Spindle formation"], a: 1, exp: "Orientation determines which homolog (maternal or paternal) enters each gamete." },
    { q: "During Prophase I, synapsis forms structures called:", choices: ["Chromatids", "Nucleosomes", "Tetrads (bivalents)", "Contractile rings"], a: 2, exp: "Paired homologs form tetrads/bivalents as a prelude to crossing over." },
    { q: "Which is TRUE about DNA synthesis between Meiosis I and II?", choices: ["Occurs fully", "Only at centromeres", "Does not occur", "Occurs only in plants"], a: 2, exp: "There is no S phase between the two meiotic divisions." },
    { q: "In the model, the X chromosome is represented by:", choices: ["8 red beads with a central centromere", "12 yellow beads with terminal centromere", "2 yellow beads only", "No beads"], a: 0, exp: "The lab builds X with 8 red beads and a magnetic centromere in the middle for easier manipulation." },
    { q: "In the model, the Y chromosome is represented by:", choices: ["8 red beads", "12 yellow beads", "2 yellow beads with a magnetic centromere between", "2 red beads without a centromere"], a: 2, exp: "The Y is modeled as a short chromosome (2 beads) with a centromere between them." },
    { q: "What event marks the end of Meiosis I?", choices: ["Centromeres split", "Nuclei reform around separated homologs; cytokinesis produces two haploid cells", "Sister chromatids separate", "DNA replicates again"], a: 1, exp: "Telophase I and cytokinesis yield two haploid nuclei with duplicated chromosomes." },
    { q: "Why are daughter cells after Meiosis I considered haploid even though chromosomes are duplicated?", choices: ["They lost all centromeres", "They contain one chromosome from each homologous pair", "They have only maternal chromosomes", "Because cytokinesis failed"], a: 1, exp: "Homologous pairs have been separated, leaving one representative per pair (n), though as sister-chromatid duplicates." },
    { q: "Which statement about genetic similarity is most accurate for meiosis products?", choices: ["All four gametes are genetically identical", "Gametes may differ due to crossing over and independent assortment", "Two are identical, two are empty", "They always match the parent cell's genotype"], a: 1, exp: "Both processes create new allele combinations, making gametes genetically diverse." },
    { q: "Which feature distinguishes meiosis from mitosis in Prophase I?", choices: ["Nuclear envelope breakdown", "Spindle formation", "Synapsis and crossing over", "Chromosome condensation"], a: 2, exp: "Synapsis and crossing over are unique to meiosis and central to genetic recombination." },
    { q: "During Anaphase II:", choices: ["Homologs separate", "Sister chromatids separate as centromeres split", "DNA replicates", "Tetrads form"], a: 1, exp: "Centromere division allows sister chromatids to move to opposite poles, akin to mitosis." },
    { q: "In the lab’s tally-and-sketch review, after Telophase I each nucleus is:", choices: ["2n and identical", "n and possibly non-identical due to crossing over", "2n and recombined", "Aneuploid by default"], a: 1, exp: "Crossing over in Prophase I can make chromatids non-identical; each nucleus is haploid (n)." },
    { q: "Which two processes together explain most meiotic genetic variation?", choices: ["DNA repair and ligation", "Crossing over in Prophase I and independent assortment at Metaphase I", "Synapsis and cytokinesis", "Spindle assembly and nuclear breakdown"], a: 1, exp: "Recombination plus independent orientation of homologs generate diverse allele combinations in gametes." }
  ]
}
,
{
  key: "W9_Lab15_16_DNA_Chromosomes",
  label: "W9 Lab15–16 — DNA, Chromosomes & Extraction",
  questions: [
    {
      q: "Why is a sports drink used instead of water to collect cheek cells for DNA extraction?",
      choices: [
        "Sports drinks are hypotonic and cause cells to burst before collection",
        "Sports drinks are isotonic and help keep cheek cells intact until lysis",
        "Water is too viscous to spit back into the tube",
        "Sports drinks chemically fix the DNA so it cannot degrade"
      ],
      a: 1,
      exp: "The sports drink has a salt concentration similar to body fluids (isotonic), preventing premature lysis of cheek cells before they are collected."
    },
    {
      q: "What is the main function of the cell lysis solution in the cheek‑cell DNA extraction?",
      choices: [
        "To precipitate DNA out of solution",
        "To dissolve phospholipid membranes and release cellular contents",
        "To neutralize acids in the sports drink",
        "To cool the sample to prevent enzyme activity"
      ],
      a: 1,
      exp: "The detergent‑based lysis solution disrupts phospholipid membranes, allowing DNA and other cell contents to flow into the lysate."
    },
    {
      q: "Why does DNA become visible when cold ethanol is layered on top of the cheek‑cell lysate?",
      choices: [
        "DNA is highly soluble in cold ethanol",
        "Ethanol causes DNA to fluoresce under room light",
        "DNA is insoluble in ethanol and precipitates as stringy fibers",
        "Ethanol digests proteins that hide DNA"
      ],
      a: 2,
      exp: "DNA is soluble in the aqueous lysate but insoluble in ethanol, so it precipitates at the interface as cloudy, stringy material."
    },
    {
      q: "What role does salt (NaCl) in the sports drink play during DNA precipitation?",
      choices: [
        "It lowers the pH of the solution",
        "It denatures DNA so it can be seen",
        "It neutralizes charges to help DNA strands clump together",
        "It dissolves the nuclear envelope"
      ],
      a: 2,
      exp: "Salt shields the negative charges on the DNA backbone, allowing strands to aggregate and precipitate more readily in ethanol."
    },
    {
      q: "In the DNA extraction lab, what is the cell lysate?",
      choices: [
        "Only the precipitated DNA fibers",
        "A mixture of dissolved membranes, proteins, DNA, and other cellular contents",
        "Just the sports drink after swishing",
        "Pure ethanol containing DNA"
      ],
      a: 1,
      exp: "After lysis, membranes and cellular components dissolve into a 'soup' of proteins, DNA, and other contents called the cell lysate."
    },
    {
      q: "According to the Introduction, why must three nucleotides code for each amino acid rather than one or two?",
      choices: [
        "There are only four amino acids to encode",
        "One or two‑nucleotide codes cannot produce enough unique combinations for 20 amino acids",
        "A four‑nucleotide code would be too efficient",
        "Proteins cannot tolerate triplet codons"
      ],
      a: 1,
      exp: "With four nucleotide bases, 1‑base codes give 4 combinations and 2‑base codes give 16, both fewer than the 20 amino acids. Triplets provide 64 possible codons."
    },
    {
      q: "How is a gene defined in the lab introduction?",
      choices: [
        "Any segment of RNA that folds into a tRNA",
        "A segment of DNA on a chromosome that codes for a polypeptide",
        "An entire chromosome, regardless of coding content",
        "Only promoter regions that regulate transcription"
      ],
      a: 1,
      exp: "A gene is described as a DNA segment whose nucleotide sequence specifies a chain of amino acids that forms a polypeptide."
    },
    {
      q: "Which sequence correctly summarizes the central dogma of molecular biology presented in the handout?",
      choices: [
        "Protein → RNA → DNA → polypeptide",
        "RNA → DNA → protein → polypeptide",
        "DNA → RNA → polypeptide → protein",
        "Polypeptide → DNA → RNA → protein"
      ],
      a: 2,
      exp: "Information flows from DNA to RNA (transcription) to polypeptide, which then folds into a functional protein."
    },
    {
      q: "In the dimples exercise, what name is given to a three‑nucleotide sequence in mRNA that specifies an amino acid?",
      choices: [
        "Anticodon",
        "Intron",
        "Codon",
        "Exon"
      ],
      a: 2,
      exp: "A codon is a three‑nucleotide sequence in mRNA that specifies one amino acid in a polypeptide chain."
    },
    {
      q: "During translation, which molecule brings amino acids to the ribosome to match with mRNA codons?",
      choices: [
        "DNA polymerase",
        "Messenger RNA (mRNA)",
        "Ribosomal RNA (rRNA)",
        "Transfer RNA (tRNA)"
      ],
      a: 3,
      exp: "tRNA molecules carry specific amino acids and use their anticodons to pair with codons on the mRNA at the ribosome."
    }
,
    {
      q: "In the thread model prelab, what do the beads-on-a-string structures formed by DNA wrapped around proteins represent?",
      choices: ["Chromosomes", "Nucleosomes", "Ribosomes", "Centromeres"],
      a: 1,
      exp: "DNA wraps around histone proteins to form bead-like nucleosomes, which further coil into chromatin."
    },
    {
      q: "Which protein family is directly responsible for helping DNA pack tightly inside the nucleus?",
      choices: ["Actin", "Histones", "Keratin", "Tubulin"],
      a: 1,
      exp: "Histone proteins act as spools that DNA wraps around, enabling dense packaging inside the nucleus."
    },
    {
      q: "When nucleosomes coil and condense into a fiber, that compacted material is called what?",
      choices: ["Chromatin", "Chromatid", "Centrosome", "Spindle fiber"],
      a: 0,
      exp: "Coiled nucleosomes form chromatin, which can be further condensed into visible chromosomes during cell division."
    },
    {
      q: "Why are you specifically instructed NOT to cut or tie knots in the thread during the DNA packaging prelab?",
      choices: [
        "Knots would represent mutations that always kill the cell",
        "Cutting and tying would shorten the total length and misrepresent how DNA is packaged",
        "The thread would dissolve in the tube if cut",
        "It would prevent the thread from entering the microcentrifuge tube at all"
      ],
      a: 1,
      exp: "The activity is meant to model how a long, continuous DNA molecule is packed, so its length must stay unchanged."
    },
    {
      q: "During cheek-cell DNA extraction, what is the cell lysate?",
      choices: [
        "Only the DNA released from cells",
        "Only broken membranes floating in water",
        "A mixture of dissolved membranes, proteins, DNA, and other cell contents",
        "A solution containing only sports drink and ethanol"
      ],
      a: 2,
      exp: "Once cells are lysed, all cellular components mix into a 'soup' called the cell lysate."
    },
    {
      q: "Why must the cheek-cell lysate layer NOT be mixed vigorously with the ethanol layer?",
      choices: [
        "Mixing would denature the DNA immediately",
        "DNA only precipitates at the interface between lysate and ethanol",
        "Sports drink reacts violently with ethanol",
        "Lysate proteins require vigorous mixing to precipitate"
      ],
      a: 1,
      exp: "DNA strands begin to precipitate where the aqueous lysate meets the ethanol; mixing disrupts this interface and makes the DNA harder to see."
    },
    {
      q: "Why does DNA precipitate when cold ethanol is layered over the aqueous lysate?",
      choices: [
        "DNA is highly soluble in cold ethanol",
        "Ethanol lowers the pH so DNA denatures",
        "DNA is insoluble in ethanol, especially when cold, and comes out of solution as visible strands",
        "Ethanol digests proteins that hide the DNA"
      ],
      a: 2,
      exp: "DNA is insoluble in ethanol, so it aggregates into visible strands at the ethanol–lysate interface."
    },
    {
      q: "What role does the salt in the sports drink play during DNA extraction?",
      choices: [
        "It dissolves DNA into tiny fragments",
        "It helps DNA strands clump together as they precipitate",
        "It permanently fixes DNA to the tube walls",
        "It neutralizes the detergent in the lysis solution"
      ],
      a: 1,
      exp: "Salt shields negative charges on DNA, allowing strands to aggregate when they precipitate in ethanol."
    },
    {
      q: "Why is it recommended to store the crude DNA sample in a freezer if you want it to last longer?",
      choices: [
        "Cold temperatures inactivate nucleases that would otherwise degrade the DNA",
        "DNA only stays double-stranded at low temperature",
        "Freezing removes all ethanol from the sample",
        "Freezing causes chromosomes to uncoil and straighten"
      ],
      a: 0,
      exp: "Cooling slows the activity of nuclease enzymes present in crude extracts, helping preserve DNA integrity."
    },
    {
      q: "In the wheat germ DNA extraction, what is the main function of the liquid dish detergent?",
      choices: [
        "To neutralize acids in the wheat germ",
        "To dissolve lipids and proteins in cell and nuclear membranes, releasing DNA",
        "To cool the solution rapidly",
        "To bind directly to DNA and make it fluorescent"
      ],
      a: 1,
      exp: "Detergent disrupts the lipid and protein components of membranes, freeing DNA into solution."
    },
    {
      q: "Why is the wheat germ mixture incubated at about 55 °C rather than near boiling?",
      choices: [
        "Higher temperatures would prevent detergent from working",
        "55 °C is low enough to preserve DNA but high enough to denature enzymes that might degrade DNA",
        "DNA melts at 55 °C",
        "Water only boils at 55 °C in this lab"
      ],
      a: 1,
      exp: "Moderately warm temperatures help detergent function and inactivate many damaging enzymes without destroying DNA."
    },
    {
      q: "What is the function of the meat tenderizer in the wheat germ DNA extraction protocol?",
      choices: [
        "It provides salts that precipitate DNA",
        "It acts as a detergent to lyse membranes",
        "It supplies proteolytic enzymes that digest proteins, including those around DNA",
        "It neutralizes the sodium bicarbonate buffer"
      ],
      a: 2,
      exp: "Meat tenderizer contains proteases that degrade proteins such as histones and nuclear membrane components, freeing DNA."
    },
    {
      q: "In the wheat germ procedure, sodium bicarbonate is added primarily to:",
      choices: [
        "Lower the pH so enzymes are inactivated",
        "Maintain a near‑neutral pH to keep DNA stable and enzymes functional",
        "Completely dehydrate the DNA",
        "Color the solution for easier viewing"
      ],
      a: 1,
      exp: "Sodium bicarbonate acts as a buffer, helping keep the solution near neutral pH so DNA remains stable and the protease works well."
    },
    {
      q: "Why is an ice bath used after incubating the wheat germ mixture at 55 °C?",
      choices: [
        "To encourage more enzymatic activity",
        "To cool the solution so that ongoing heat will not damage DNA",
        "To cause detergents to precipitate",
        "To freeze the solution solid before adding ethanol"
      ],
      a: 1,
      exp: "Rapid cooling protects DNA from heat damage after incubation and prepares the mixture for ethanol precipitation."
    },
    {
      q: "When ice‑cold alcohol is carefully layered over the wheat germ solution, long DNA strands appear at the interface because:",
      choices: [
        "DNA is insoluble in cold alcohol and precipitates as visible fibers",
        "DNA melts and becomes fluorescent at low temperatures",
        "Proteins become more soluble and drag DNA upward",
        "Lipids crystallize and trap DNA in micelles"
      ],
      a: 0,
      exp: "Cold alcohol dehydrates DNA, which is insoluble in alcohol, causing it to precipitate as strands that can be spooled."
    },
    {
      q: "Which three components make up a DNA nucleotide?",
      choices: [
        "A phosphate, a deoxyribose sugar, and a nitrogenous base",
        "A ribose sugar, a phosphate, and an amino acid",
        "A phospholipid, a sugar, and a peptide bond",
        "An amino group, a carboxyl group, and an R group"
      ],
      a: 0,
      exp: "Each DNA nucleotide consists of a phosphate group, deoxyribose sugar, and one of four nitrogenous bases."
    },
    {
      q: "Which set lists ONLY the four nitrogen bases found in DNA?",
      choices: [
        "Adenine, uracil, cytosine, guanine",
        "Adenine, thymine, cytosine, guanine",
        "Thymine, uracil, guanine, cytosine",
        "Adenine, thymine, uracil, guanine"
      ],
      a: 1,
      exp: "DNA uses the nitrogen bases A, T, C, and G; RNA uses uracil instead of thymine."
    },
    {
      q: "What is the three‑dimensional shape of the DNA molecule discovered by Watson and Crick?",
      choices: [
        "Single helix",
        "Triple helix",
        "Double helix",
        "Flat ladder with no twist"
      ],
      a: 2,
      exp: "Watson and Crick described DNA as a double helix, resembling a twisted ladder."
    },
    {
      q: "A gene is best described as:",
      choices: [
        "A segment of DNA that codes for a polypeptide",
        "Any random stretch of RNA",
        "A protein that folds into DNA",
        "A lipid that stores genetic information"
      ],
      a: 0,
      exp: "Genes are specific DNA segments whose nucleotide sequence encodes a polypeptide."
    },
    {
      q: "Which statement correctly summarizes the central dogma of molecular biology?",
      choices: [
        "Protein → RNA → DNA",
        "DNA → RNA → Polypeptide → Protein",
        "RNA → DNA → Protein",
        "Protein → DNA → RNA"
      ],
      a: 1,
      exp: "Information typically flows from DNA to RNA to polypeptide, which folds into a functional protein."
    },
    {
      q: "Transcription is the process in which:",
      choices: [
        "Information in DNA is copied into an RNA molecule",
        "A polypeptide is folded into its final shape",
        "RNA is translated into a carbohydrate",
        "DNA is directly converted into protein"
      ],
      a: 0,
      exp: "During transcription, a DNA template strand is used to synthesize RNA, usually mRNA."
    },
    {
      q: "Translation is the step in protein synthesis during which:",
      choices: [
        "DNA is replicated before cell division",
        "mRNA information is used to assemble a chain of amino acids",
        "tRNA is converted into mRNA",
        "Nucleotides are joined to form mRNA"
      ],
      a: 1,
      exp: "Translation decodes the mRNA sequence into a specific order of amino acids in a polypeptide."
    },
    {
      q: "How many nucleotides make up a single mRNA codon?",
      choices: ["One", "Two", "Three", "Four"],
      a: 2,
      exp: "Each codon consists of three mRNA nucleotides that specify one amino acid."
    },
    {
      q: "How many amino acids are specified by a single codon?",
      choices: ["Exactly one amino acid", "Two amino acids", "Three amino acids", "It depends on the organism"],
      a: 0,
      exp: "Each codon is translated into one amino acid (or a stop signal) in the growing polypeptide chain."
    },
    {
      q: "In the dimples gene exercise, the presence of arginine as the third amino acid indicates that:",
      choices: [
        "The person must be homozygous recessive for dimples",
        "The person will have dimples",
        "The person will not have dimples",
        "The gene is not expressed"
      ],
      a: 1,
      exp: "The lab specifies that if arginine is the third amino acid, the phenotype is 'dimples present'."
    },
    {
      q: "What is the role of tRNA during translation?",
      choices: [
        "It stores genetic information in the nucleus",
        "It catalyzes formation of peptide bonds only",
        "It brings specific amino acids to the ribosome and matches anticodons to mRNA codons",
        "It splices introns out of pre‑mRNA"
      ],
      a: 2,
      exp: "tRNA has anticodons that pair with mRNA codons while carrying the corresponding amino acids to the ribosome."
    },
    {
      q: "Which statement about the genetic code is MOST accurate?",
      choices: [
        "It varies completely between bacteria and animals",
        "It is universal for all living things with no exceptions",
        "It is nearly universal, with most organisms using the same codon meanings",
        "It is unique to humans"
      ],
      a: 2,
      exp: "The genetic code is described as universal (with a few minor exceptions), meaning codons generally specify the same amino acids across life."
    },
    {
      q: "Most of the DNA in the human genome:",
      choices: [
        "Directly codes for proteins",
        "Is noncoding, including regulatory regions and other sequences",
        "Is made only of RNA",
        "Codes exclusively for tRNA molecules"
      ],
      a: 1,
      exp: "Only a small fraction of human DNA encodes proteins; much is noncoding or regulatory."
    },
    {
      q: "During the protein synthesis bingo activity, students use the codon chart primarily to:",
      choices: [
        "Convert amino acid sequences back into DNA",
        "Determine which amino acid corresponds to each mRNA codon that is called",
        "Measure how fast tRNA moves through the ribosome",
        "Estimate the length of chromosomes"
      ],
      a: 1,
      exp: "The bingo game reinforces using the mRNA codon chart to translate nucleotide triplets into amino acids."
    },
    {
      q: "Which molecule actually carries the codons that are read during translation?",
      choices: [
        "DNA in the nucleus",
        "mRNA in the cytoplasm",
        "tRNA in the cytoplasm",
        "rRNA in the ribosome"
      ],
      a: 1,
      exp: "Codons are three‑base sequences in mRNA that are read by the ribosome during translation."
    }

  ]
}


], []);

  /** --------------------------- Helpers --------------------------- **/

// Helpers to manage multi-select state
const addKey = (arr, key) => (arr.includes(key) ? arr : [...arr, key]);
const removeKey = (arr, key) => arr.filter((k) => k !== key);
const setAllModules = () => setModuleKeys([ALL.key]);
const clearAllModules = () => setModuleKeys([]);

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
      onClick={() => setAllModules()}
      className="rounded-xl bg-slate-100 px-3 py-1 text-slate-800 shadow hover:bg-slate-200"
      title="Select all modules (Mixed)"
    >
      All
    </button>
    <button
      type="button"
      onClick={() => clearAllModules()}
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


// ===== Component: Exam4_FITB_Lab21_Lab22 =====

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

function Exam4_FITB_Lab21_Lab22() {  const QUESTIONS = useMemo(() => ([
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


// ===== Component: Exam4_MCQ_Lab21_Lab23 =====

/**
 * BioMegaQuiz — React + Tailwind single-file quiz
 * - 15 questions per module (expanded)
 * - Modules: Plasma Membranes (3 parts), Metabolism (3 parts), Viruses (2 parts)
 * - Mixed mode (All) + module filter, randomization, scoring, review, reshuffle
 */

function Exam4_MCQ_Lab21_Lab23() {
  /** --------------------------- Question Data --------------------------- **/
  // 15 questions per module (expanded as requested)
  // Module keys match dropdown filter labels.

  const modules = useMemo(() => [



{
  key: "W12_Lab21_16_01_Introduction",
  label: "W12 Lab21 • 16.01 Introduction (10 MCQs)",
  questions: [
      {
        q: "Mendel’s experiments refuted which prevailing idea of inheritance?",
        choices: ["Blending inheritance", "Chromosome theory", "Central dogma", "Epigenetic inheritance"],
        a: 0,
        exp: "Mendel showed traits segregate as discrete units rather than blending."
      },
      {
        q: "Why was Pisum sativum a powerful model for Mendel?",
        choices: ["Obligate outcrossing and long generation time", "Self‑fertilization, many dichotomous traits, short generations", "Polyploidy and continuous variation", "Animal pollination only"],
        a: 1,
        exp: "Peas self, have many true‑breeding lines and fast generation time."
      },
      {
        q: "'True‑breeding' lines are best described as:",
        choices: ["Always heterozygous", "Producing offspring identical for the trait", "Unable to self‑fertilize", "Always recessive"],
        a: 1,
        exp: "Selfing fixes alleles so progeny match the parent for the trait."
      },
      {
        q: "In Mendel’s notation, the first filial generation is abbreviated:",
        choices: ["P", "F0", "F1", "G1"],
        a: 2,
        exp: "P are parental; F1 are their immediate offspring."
      },
      {
        q: "Which step describes a hybridization in peas?",
        choices: ["Selfing a single plant", "Manual transfer of pollen between two true‑breeding lines", "Allowing wind pollination", "Crossing different species"],
        a: 1,
        exp: "Mendel manually transferred pollen between lines differing in a trait."
      },
      {
        q: "Which observation supports particulate inheritance?",
        choices: ["F1 always intermediate", "F2 reappearance of recessive phenotype", "Traits only in males", "No ratios in F2"],
        a: 1,
        exp: "Recessive phenotypes reappeared in F2 ~1/4, consistent with discrete alleles."
      },
      {
        q: "What feature of pea flowers prevents unwanted cross‑pollination?",
        choices: ["Flowers remain open", "Petals sealed until pollination completes", "Wind‑exposed anthers", "Removal of sepals"],
        a: 1,
        exp: "Sealed petals protect self‑pollination in peas."
      },
      {
        q: "Relative to continuous variation, Mendel focused on traits that showed:",
        choices: ["A spectrum of heights", "Discontinuous variation with few categories", "Environmental plasticity", "Polygenic effects only"],
        a: 1,
        exp: "Binary/discrete traits (e.g., violet vs white) enabled clear ratios."
      },
      {
        q: "Which choice lists generations in the historical order used by Mendel?",
        choices: ["F2 → P → F1", "P → F1 → F2", "P → F2 → F1", "G1 → P → F1"],
        a: 1,
        exp: "Parental (P), then F1, then F2 after selfing the F1."
      },
      {
        q: "A key reason Mendel’s conclusions were trusted was his use of:",
        choices: ["Tiny sample sizes and anecdotes", "Large sample sizes and quantitative analysis", "Only qualitative drawings", "Computer simulations"],
        a: 1,
        exp: "He counted thousands of individuals and used ratios."
      }
  ]
},

{
  key: "W12_Lab21_16_02_Exercise",
  label: "W12 Lab21 • 16.02 Exercise (10 MCQs)",
  questions: [
      {
        q: "Alternate forms of a gene are called:",
        choices: ["Loci", "Alleles", "Chromatids", "Gametes"],
        a: 1,
        exp: "Alleles are variant DNA sequences of the same gene."
      },
      {
        q: "An individual with genotype Aa is:",
        choices: ["Homozygous dominant", "Homozygous recessive", "Heterozygous", "Hemizygous"],
        a: 2,
        exp: "Heterozygous carries two different alleles."
      },
      {
        q: "Dominant alleles are:",
        choices: ["Masked in heterozygotes", "Expressed in the phenotype when present", "Only present in males", "Always more common"],
        a: 1,
        exp: "Dominant alleles determine the phenotype in heterozygotes."
      },
      {
        q: "Mendel’s Law of Segregation states that:",
        choices: ["Alleles for a gene separate into different gametes", "Different genes are linked", "Gametes are diploid", "Alleles fuse during meiosis"],
        a: 0,
        exp: "Each gamete receives one allele per gene."
      },
      {
        q: "Mendel’s Law of Independent Assortment says:",
        choices: ["Traits on the same chromosome are independent", "Each trait is inherited independently (if unlinked)", "Dominant traits are more frequent", "Gametes are identical"],
        a: 1,
        exp: "Different gene pairs assort independently if on different chromosomes."
      },
      {
        q: "In incomplete dominance, the heterozygote phenotype is:",
        choices: ["Dominant", "Recessive", "Intermediate", "Unrelated"],
        a: 2,
        exp: "Heterozygotes show an intermediate phenotype (e.g., pink)."
      },
      {
        q: "In codominance, heterozygotes:",
        choices: ["Express neither allele", "Express both alleles equally", "Express only recessive", "Switch randomly"],
        a: 1,
        exp: "e.g., IAIB expresses both A and B antigens."
      },
      {
        q: "AO × BO (ABO simplification) can produce which phenotype?",
        choices: ["Only AB", "A, B, AB, or O", "Only O", "Only A or B"],
        a: 1,
        exp: "With recessive O, all four phenotypes are possible."
      },
      {
        q: "For genotype AaBb, possible gametes are:",
        choices: ["AB and ab only", "AA, aa, BB, bb", "AB, Ab, aB, ab", "A, a, B, b (four separate)"],
        a: 2,
        exp: "Each gamete gets one allele per gene, yielding four combinations."
      },
      {
        q: "A dihybrid self cross (AaBb × AaBb) yields which classic F2 phenotypic ratio?",
        choices: ["3:1", "1:2:1", "9:3:3:1", "1:1"],
        a: 2,
        exp: "Under independent assortment, 9:3:3:1 is expected."
      }
  ]
},

{
  key: "W12_Lab21_Packet_F24",
  label: "W12 Lab21 • Biol4A Intro to Mendelian Genetics F24 (10 MCQs)",
  questions: [
      {
        q: "Clinodactyly (bent little finger) is represented as:",
        choices: ["c dominant; C recessive", "C dominant; c recessive", "L dominant; l recessive", "D dominant; d recessive"],
        a: 1,
        exp: "Packet lists bent finger as dominant 'C'."
      },
      {
        q: "PTC tasting is represented as:",
        choices: ["P dominant; p recessive", "T dominant; t recessive", "Z dominant; z recessive", "R dominant; r recessive"],
        a: 0,
        exp: "PTC tasting uses P/p."
      },
      {
        q: "Widow’s peak is coded as:",
        choices: ["W dominant; w recessive", "V dominant; v recessive", "A dominant; a recessive", "Z dominant; z recessive"],
        a: 0,
        exp: "Packet shows widow’s peak W/w."
      },
      {
        q: "Free earlobes vs attached are denoted:",
        choices: ["E/e with E dominant", "L/l with L dominant", "G/g with G dominant", "A/a with A dominant"],
        a: 0,
        exp: "Free earlobes are E (dominant)."
      },
      {
        q: "Which trait pair is correctly matched?",
        choices: ["Finger hair: H dominant", "Dimpled cheeks: d dominant", "Eyebrow raising: y dominant", "Ear wiggling: g dominant"],
        a: 0,
        exp: "H for finger hair is dominant; others listed are recessive in packet."
      },
      {
        q: "In the Create‑A‑Kid activity, which parent determines sex of the child?",
        choices: ["Mother", "Father", "Both equally", "Randomly teacher"],
        a: 1,
        exp: "XY parent contributes X or Y, determining sex."
      },
      {
        q: "In the Create‑A‑Kid setup, each folded paper represents:",
        choices: ["A chromosome pair from both parents", "One allele on each side for a single trait", "A phenotype only", "A Punnett square"],
        a: 1,
        exp: "Each paper has two alleles for one trait; face‑up is the gamete contribution."
      },
      {
        q: "If a student is dominant for a trait in the activity, they assume they are:",
        choices: ["Homozygous dominant", "Heterozygous", "Homozygous recessive", "Hemizygous"],
        a: 1,
        exp: "Assume heterozygous to model segregation."
      },
      {
        q: "For long second toe trait, the dominant notation used is:",
        choices: ["l", "T", "L", "Z"],
        a: 2,
        exp: "Packet lists long second toe as L (dominant)."
      },
      {
        q: "Which cross is used to map dihybrid expectations in the packet?",
        choices: ["AA × aa", "Aa × aa", "AaBb × AaBb", "AAbb × aaBB"],
        a: 2,
        exp: "Packet provides a dihybrid Punnett square for AaBb × AaBb."
      }
  ]
},

{
  key: "W12_Lab21_16_03_LabReport",
  label: "W12 Lab21 • 16.03 Lab Report (10 MCQs)",
  questions: [
      {
        q: "The lab report section asks students to use letter ‘A’ to represent:",
        choices: ["Enzyme activity", "Flower color with A = red, a = white", "Blood type", "Hemoglobin variants"],
        a: 1,
        exp: "Lab report repeats A=red, a=white for worked crosses."
      },
      {
        q: "Which crosses are required in the lab report for monohybrid analysis?",
        choices: ["AA×aa; AA×Aa; Aa×Aa; Aa×aa", "AA×AA only", "aa×aa only", "Aa×Aa only"],
        a: 0,
        exp: "Students compute genotypic/phenotypic outcomes for those four crosses."
      },
      {
        q: "Which non‑Mendelian patterns are included for analysis?",
        choices: ["Epistasis only", "Incomplete dominance and codominance", "Cytoplasmic inheritance", "Linkage maps"],
        a: 1,
        exp: "Both incomplete dominance and codominance are addressed."
      },
      {
        q: "Which blood group example demonstrates codominance in the report?",
        choices: ["MN system", "Rh factor", "ABO (IA, IB, i)", "Duffy"],
        a: 2,
        exp: "ABO is used to illustrate codominance."
      },
      {
        q: "The class data table records for each trait:",
        choices: ["Only genotypes", "Only phenotypes", "Phenotype and possible genotypes plus class dominance percentages", "DNA sequences"],
        a: 2,
        exp: "Columns include phenotype, possible genotypes, and class tallies."
      },
      {
        q: "For AaBb heterozygote gamete listing, students must provide:",
        choices: ["Two gametes", "One gamete", "Four gametes", "Eight gametes"],
        a: 2,
        exp: "AB, Ab, aB, ab."
      },
      {
        q: "The dihybrid cross analyzed in the report is:",
        choices: ["AAbb × aaBB", "AaBb × AaBb", "AaBb × aabb", "AAbb × AAbb"],
        a: 1,
        exp: "Standard F2 dihybrid self‑cross."
      },
      {
        q: "The expected F2 phenotypic ratio for the dihybrid under independent assortment is:",
        choices: ["1:2:1", "3:1", "9:3:3:1", "1:1"],
        a: 2,
        exp: "Classic 9:3:3:1."
      },
      {
        q: "The lab report emphasizes that alleles:",
        choices: ["Blend during meiosis", "Segregate into gametes", "Duplicate in gametes", "Are lost in F1"],
        a: 1,
        exp: "Law of segregation: alleles separate into gametes."
      },
      {
        q: "In the report, incomplete dominance example leads to which phenotype distribution when heterozygotes self?",
        choices: ["All dominant", "All recessive", "1:2:1", "3:1"],
        a: 2,
        exp: "Red:pink:white."
      }
    ]
  },
  {
    key: "W12_Lab22_Lab7_F1_DataCollection",
    label: "W12 Lab22 – Lab 7 Fast Plants F1 Data Collection",
    questions: [
      {
        q: "What is the main purpose of the F1 data collection sheet for Fast Plants?",
        choices: [
          "To design new mutants",
          "To record phenotypes (stem and leaf color) of F1 plants in each quad",
          "To count only the number of seeds planted",
          "To measure soil pH in each quad"
        ],
        a: 1,
        exp: "The Lab 7 F1 sheet is used to tally stem and leaf phenotypes for each F1 plant in every quad to prepare for later genetic analysis. :contentReference[oaicite:0]{index=0}"
      },
      {
        q: "Quad #1 in the F1 data sheet contains seeds with which genotype and trait focus?",
        choices: [
          "ygr/YGR, leaf color only",
          "ros/ros, stem length only",
          "anl/ANL, stem color",
          "Var, variegated leaves"
        ],
        a: 2,
        exp: "Quad #1 is labeled anl/ANL and students record purple vs green (non-purple) stem phenotypes. :contentReference[oaicite:1]{index=1}"
      },
      {
        q: "For Quad #1, which two stem phenotypes are you asked to count?",
        choices: [
          "Tall and dwarf",
          "Hairy and hairless",
          "Purple stems and green (non-purple) stems",
          "Round seeds and wrinkled seeds"
        ],
        a: 2,
        exp: "The sheet has spaces for the number of purple stems and number of green stems in Quad #1. :contentReference[oaicite:2]{index=2}"
      },
      {
        q: "Quad #2 combines which two traits for F1 data collection?",
        choices: [
          "Leaf color and seed shape",
          "Stem color and leaf color",
          "Flower color and pod shape",
          "Root length and plant height"
        ],
        a: 1,
        exp: "Quad #2 asks you to record combinations of leaf color (bright green vs yellow-green) and stem color (purple vs green). :contentReference[oaicite:3]{index=3}"
      },
      {
        q: "Which phenotype combination appears as one of the four categories for Quad #2?",
        choices: [
          "Yellow flowers, purple pods",
          "Bright green leaves with purple stems",
          "Tall plants with yellow seeds",
          "Hairless stems with wrinkled seeds"
        ],
        a: 1,
        exp: "One category is “bright green leaves + purple stems,” along with three other leaf/stem combinations. :contentReference[oaicite:4]{index=4}"
      },
      {
        q: "When thinning plants in Quad #1, which plants should be kept?",
        choices: [
          "Any plants with the strongest roots",
          "Plants with purple stems, one per cell when possible",
          "Plants with green stems only",
          "The tallest plants regardless of color"
        ],
        a: 1,
        exp: "Instructions say to thin to one plant per cell, selecting for plants with purple stems in Quad #1. :contentReference[oaicite:5]{index=5}"
      },
      {
        q: "When thinning plants in Quad #2, what phenotype should you keep?",
        choices: [
          "Yellow-green leaves with green stems",
          "Bright green leaves with purple stems",
          "Yellow-green leaves with purple stems",
          "Any plant with green stems"
        ],
        a: 1,
        exp: "For Quad #2 you keep plants that have bright green leaves and purple stems, one per cell. :contentReference[oaicite:6]{index=6}"
      },
      {
        q: "After thinning, how many plants total should remain in each quad?",
        choices: [
          "2 plants total",
          "3 plants total",
          "4 plants total",
          "8 plants total"
        ],
        a: 2,
        exp: "The handout notes that each quad should end up with a total of four plants, with one per cell when possible. :contentReference[oaicite:7]{index=7}"
      },
      {
        q: "Where are quads placed after watering until water drips from each wick?",
        choices: [
          "On a paper towel to dry",
          "Back into the refrigerator",
          "Back onto the watering mat, ensuring all wicks contact the mat",
          "Under a heat lamp to evaporate extra water"
        ],
        a: 2,
        exp: "Students gently water with tap water and then return each quad to the watering mat with all four wicks touching the mat. :contentReference[oaicite:8]{index=8}"
      },
      {
        q: "According to the F1 data sheet, when are F1 results typically collected?",
        choices: [
          "Immediately after planting",
          "About 1–2 weeks after planting",
          "At the end of the semester only",
          "Only after seed harvest"
        ],
        a: 1,
        exp: "The top of the lab sheet states that F1 results are recorded approximately 1–2 weeks after planting. :contentReference[oaicite:9]{index=9}"
      }
    ]
  },
  {
    key: "W12_Lab22_Lab7_Genetics_FastPlants",
    label: "W12 Lab22 – Lab 7 Genetics of Wisconsin Fast Plants",
    questions: [
      {
        q: "The purple stem pigment in Wisconsin Fast Plants is due to the presence of:",
        choices: [
          "Chlorophyll b",
          "Anthocyanin",
          "Carotene",
          "Xanthophyll"
        ],
        a: 1,
        exp: "The background explains that anthocyanin is the purple pigment found in Fast Plants stems. :contentReference[oaicite:10]{index=10}"
      },
      {
        q: "Plants with genotype anl/anl for the anthocyanin gene show which stem phenotype?",
        choices: [
          "Purple stems",
          "Variegated stems",
          "Bright green, non-purple stems",
          "Yellow stems"
        ],
        a: 2,
        exp: "Homozygous recessive anl/anl plants lack anthocyanin and appear bright green (non-purple stem). :contentReference[oaicite:11]{index=11}"
      },
      {
        q: "Which genotype combination produces the purple stem phenotype?",
        choices: [
          "anl/anl only",
          "anl/ANL or ANL/ANL",
          "ygr/ygr only",
          "ros/ros only"
        ],
        a: 1,
        exp: "Either heterozygous anl/ANL or homozygous dominant ANL/ANL expresses anthocyanin and appears purple. :contentReference[oaicite:12]{index=12}"
      },
      {
        q: "The recessive yellow-green leaf phenotype is associated with which genotype?",
        choices: [
          "YGR/YGR",
          "YGR/ygr",
          "ygr/ygr",
          "ANL/ANL"
        ],
        a: 2,
        exp: "Leaf color is controlled by the ygr gene; the homozygous recessive ygr/ygr genotype gives pale yellow-green leaves. :contentReference[oaicite:13]{index=13}"
      },
      {
        q: "In the shorthand notation suggested in the handout, A/_ represents:",
        choices: [
          "A recessive allele only",
          "Any genotype without A",
          "Any genotype with at least one dominant A allele",
          "A genotype with no phenotype"
        ],
        a: 2,
        exp: "Using A/_ means at least one dominant allele is present; the second allele can be either dominant or recessive. :contentReference[oaicite:14]{index=14}"
      },
      {
        q: "A dihybrid cross between ANL/ANL YGR/YGR and anl/anl ygr/ygr is predicted to yield F1 offspring with genotype:",
        choices: [
          "ANL/ANL YGR/YGR",
          "anl/anl ygr/ygr",
          "anl/ANL ygr/YGR",
          "ANL/anl YGR/ygr"
        ],
        a: 3,
        exp: "Each F1 receives one dominant and one recessive allele for each gene, producing ANL/anl YGR/ygr heterozygotes. :contentReference[oaicite:15]{index=15}"
      },
      {
        q: "For the dihybrid F2 from ANL/anl YGR/ygr self-crosses, which phenotypic ratio is expected under Mendelian inheritance?",
        choices: [
          "3:1",
          "1:2:1",
          "9:3:3:1",
          "1:1"
        ],
        a: 2,
        exp: "The handout shows that a dihybrid cross yields a 9:3:3:1 ratio of combined stem and leaf phenotypes. :contentReference[oaicite:16]{index=16}"
      },
      {
        q: "The ros/ros genotype in Fast Plants results in which phenotype?",
        choices: [
          "Rosette (short) plants needing gibberellin",
          "Extra-tall plants",
          "Albino plants",
          "Yellow-green leaves only"
        ],
        a: 0,
        exp: "The ros mutant is deficient in gibberellin and produces short rosette plants when homozygous recessive. :contentReference[oaicite:17]{index=17}"
      },
      {
        q: "When a ros/ros plant is crossed with a heterozygous Ros/ros plant, what stem length ratio is expected among offspring?",
        choices: [
          "All rosette",
          "All tall",
          "1 tall : 1 rosette",
          "3 tall : 1 rosette"
        ],
        a: 2,
        exp: "The cross ros/ros × Ros/ros yields 50% Ros/ros (tall) and 50% ros/ros (rosette). :contentReference[oaicite:18]{index=18}"
      },
      {
        q: "The virtual Fast Plant simulation URL/QR code is recommended so that students can:",
        choices: [
          "Practice sterile technique",
          "Explore how traits change over many generations by simulated crosses",
          "Measure soil nutrients in real time",
          "Calculate mutation rates in bacteria"
        ],
        a: 1,
        exp: "The handout suggests using the virtual simulation to see how phenotypes change over multiple generations and how non-purple color can disappear and reappear. :contentReference[oaicite:19]{index=19}"
      }
    ]
  },
  {
    key: "W12_Lab22_Lab9_Overview",
    label: "W12 Lab22 – Lab 9 Fast Plants Project Overview",
    questions: [
      {
        q: "The Fast Plants project primarily uses which organism as a genetic model?",
        choices: [
          "Arabidopsis thaliana",
          "Zea mays",
          "Brassica rapa (Wisconsin Fast Plants)",
          "Drosophila melanogaster"
        ],
        a: 2,
        exp: "The overview explains that the project uses Brassica rapa, marketed as Wisconsin Fast Plants, because of its short life cycle and easy cultivation. :contentReference[oaicite:20]{index=20}"
      },
      {
        q: "Why is B. rapa particularly well suited for classroom genetics experiments?",
        choices: [
          "It has a long generation time and complex care requirements",
          "It is a diploid with a rapid life cycle and easily observed traits",
          "It is a haploid fungus",
          "It requires specialized growth chambers"
        ],
        a: 1,
        exp: "B. rapa completes its life cycle in a few weeks, is diploid, and shows clear, dichotomous traits, making it ideal for studying inheritance. :contentReference[oaicite:21]{index=21}"
      },
      {
        q: "The main learning goal of the Fast Plants project is to:",
        choices: [
          "Practice bacterial transformation",
          "Understand diploid genetics and apply chi-square analysis using a living organism",
          "Memorize plant taxonomy",
          "Measure rates of photosynthesis"
        ],
        a: 1,
        exp: "The introduction highlights that students will gain hands-on experience with diploid inheritance and basic statistics (chi-square). :contentReference[oaicite:22]{index=22}"
      },
      {
        q: "In this project, a trait’s genotype refers to:",
        choices: [
          "The observable appearance of the plant",
          "The combination of alleles carried for that trait",
          "The number of seeds in each pod",
          "The soil type in the pot"
        ],
        a: 1,
        exp: "The handout defines genotype as the genetic makeup (alleles) and phenotype as the observable characteristics. :contentReference[oaicite:23]{index=23}"
      },
      {
        q: "Which of the following best describes a dichotomous trait as used in the project?",
        choices: [
          "A trait with many intermediate phenotypes",
          "A trait influenced only by the environment",
          "A trait with two distinct forms, such as short/tall or purple/green",
          "A trait controlled by many genes"
        ],
        a: 2,
        exp: "Dichotomous traits have two clear categories, such as purple vs non-purple stems. :contentReference[oaicite:24]{index=24}"
      },
      {
        q: "Diploid organisms like B. rapa have:",
        choices: [
          "A single set of chromosomes in all cells",
          "Two sets of chromosomes, one from each parent",
          "No chromosomes in somatic cells",
          "Four sets of chromosomes in gametes"
        ],
        a: 1,
        exp: "The overview explains that diploid organisms carry two chromosome sets and form gametes with half that number. :contentReference[oaicite:25]{index=25}"
      },
      {
        q: "In the life cycle described, how are B. rapa gametes produced?",
        choices: [
          "By mitosis in all body cells",
          "By meiosis producing pollen and ovules",
          "By binary fission",
          "By vegetative propagation"
        ],
        a: 1,
        exp: "The handout notes that pollen and ovules are the plant gametes produced by meiosis. :contentReference[oaicite:26]{index=26}"
      },
      {
        q: "A monohybrid cross in the Fast Plants project examines:",
        choices: [
          "The inheritance of two traits",
          "The inheritance of one trait at a time",
          "Only environmental effects",
          "Only mitochondrial DNA"
        ],
        a: 1,
        exp: "Monohybrid crosses track a single trait such as stem color; dihybrid crosses track two traits at once. :contentReference[oaicite:27]{index=27}"
      },
      {
        q: "For a monohybrid cross between two true-breeding parents, what phenotypic ratio is expected in the F2 generation?",
        choices: [
          "1:2:1",
          "9:3:3:1",
          "3:1",
          "2:1"
        ],
        a: 2,
        exp: "The text states that monohybrid F2 offspring should follow a 3:1 dominant:recessive phenotypic ratio. :contentReference[oaicite:28]{index=28}"
      },
      {
        q: "In a dihybrid cross starting from true-breeding parents differing in two traits, what F2 phenotypic ratio is expected if the genes assort independently?",
        choices: [
          "3:1",
          "1:2:1",
          "9:3:3:1",
          "1:1:1:1"
        ],
        a: 2,
        exp: "The overview explains that dihybrid crosses under Mendelian inheritance give a 9:3:3:1 phenotypic ratio. :contentReference[oaicite:29]{index=29}"
      }
    ]
  },
  {
    key: "W12_Lab22_Lab9_Instructions_Day1",
    label: "W12 Lab22 – Lab 9 Fast Plants Day 1 Instructions",
    questions: [
      {
        q: "On Day 1, each student group generally prepares how many Fast Plant quads for the genetics project?",
        choices: [
          "One quad only",
          "Two to three quads",
          "Fourteen quads",
          "As many as will fit on the bench"
        ],
        a: 1,
        exp: "The instructions state that each group will need 2–3 separate quads, each containing four cells. :contentReference[oaicite:30]{index=30}"
      },
      {
        q: "Quad 1 on Planting Day 1 is planted with which seed type?",
        choices: [
          "Variegated (Var) seeds only",
          "ANL/ANL purple stem seeds",
          "anl/ANL F1 non-purple stem, hairless seeds",
          "ygr/ygr yellow-green leaf seeds"
        ],
        a: 2,
        exp: "Quad 1 uses anl/ANL F1 seeds that show the non-purple stem, hairless phenotype. :contentReference[oaicite:31]{index=31}"
      },
      {
        q: "Quad 2 is planted with seeds that are described as:",
        choices: [
          "ANL/ANL, purple stem, hairy",
          "anl/ANL, ygr/YGR (non-purple stem, yellow-green leaf)",
          "Var only",
          "ros/ros (rosette) plants"
        ],
        a: 1,
        exp: "Quad 2 receives anl/ANL, ygr/YGR seeds, representing F1 non-purple stem, yellow-green leaf plants. :contentReference[oaicite:32]{index=32}"
      },
      {
        q: "In the optional Quad 3, how are seeds distributed among the four cells?",
        choices: [
          "All four cells get the same seed type",
          "Two cells with ANL/ANL and two cells with Var seeds",
          "All cells with variegated seeds",
          "Two cells empty and two with seeds"
        ],
        a: 1,
        exp: "Quad 3 (if used) has two cells with ANL/ANL purple-stem seeds and two cells with variegated (Var) seed type. :contentReference[oaicite:33]{index=33}"
      },
      {
        q: "What labeling information must be written on each quad?",
        choices: [
          "Only group number",
          "Group name, quad number, date, and seed type",
          "Instructor’s name only",
          "Just the lab section"
        ],
        a: 1,
        exp: "The instructions emphasize labeling each quad with group name, quad #, date, and seed type (and tagging individual cells in Quad 3 if needed). :contentReference[oaicite:34]{index=34}"
      },
      {
        q: "How many quads can sit on top of one water reservoir according to the diagram?",
        choices: [
          "Two",
          "Four",
          "Eight",
          "Sixteen"
        ],
        a: 2,
        exp: "The handout states that up to eight quads can fit on a single reservoir. :contentReference[oaicite:35]{index=35}"
      },
      {
        q: "Why are wicks used in the Fast Plant quad setup?",
        choices: [
          "To provide mechanical support",
          "To deliver fertilizer directly to leaves",
          "To draw water from the reservoir into the soil by capillary action",
          "To keep insects away"
        ],
        a: 2,
        exp: "The quad sits on a watering mat and wicks pull water up from the reservoir to keep the soil moist. :contentReference[oaicite:36]{index=36}"
      },
      {
        q: "According to the project outline, when will F1 plants typically be quantified for phenotypes?",
        choices: [
          "On the same day as planting",
          "One week before germination",
          "About one week after planting",
          "Only after collecting F2 seeds"
        ],
        a: 2,
        exp: "The overview schedule lists F1 quantification as occurring after initial growth, roughly one week after planting. "
      },
      {
        q: "In the multi-week timeline, when is chi-square analysis planned for the class Fast Plants data?",
        choices: [
          "On Planting Day 1",
          "Immediately after pollination",
          "When F2 phenotypes have been counted",
          "At the final exam only"
        ],
        a: 2,
        exp: "The outline shows chi-square analysis occurring on the same day F2 data are quantified, after both generations have been observed. :contentReference[oaicite:38]{index=38}"
      },
      {
        q: "Which statement best summarizes the main task on Planting Day 1?",
        choices: [
          "Harvesting seeds from F2 plants",
          "Setting up quads with labeled F1 seeds and proper watering system",
          "Calculating chi-square values",
          "Writing the final lab report"
        ],
        a: 1,
        exp: "Day 1 focuses on planting labeled quads with the appropriate seed types and placing them on the watering reservoir to start the project. :contentReference[oaicite:39]{index=39}"
      }
    ]
  },
  {
    key: "W13_Lab22_ChiSquare_Analysis",
    label: "W13 Lab22 – Fast Plants Chi-Square Analysis",
    questions: [
      {
        q: "In Quad 1, the anthocyanin gene ANL controls which trait in Fast Plants?",
        choices: [
          "Leaf shape",
          "Stem color (purple vs green)",
          "Flower size",
          "Seed coat color"
        ],
        a: 1,
        exp: "The Chi-Square lab explains that ANL encodes anthocyanin pigment responsible for purple stems; anl/anl plants are green. :contentReference[oaicite:40]{index=40}"
      },
      {
        q: "Which genotypes produce the purple stem phenotype in Quad 1?",
        choices: [
          "anl/anl only",
          "ANL/ANL only",
          "ANL/ANL and ANL/anl",
          "anl/anl and ANL/anl"
        ],
        a: 2,
        exp: "Both homozygous dominant ANL/ANL and heterozygous ANL/anl produce anthocyanin and appear purple. :contentReference[oaicite:41]{index=41}"
      },
      {
        q: "What F2 phenotypic ratio is hypothesized for purple vs green stems in Quad 1 crosses?",
        choices: [
          "1:1 purple:green",
          "2:1 purple:green",
          "3:1 purple:green",
          "9:3:3:1"
        ],
        a: 2,
        exp: "The margin note on the lab sheet states that F2 offspring should follow a 3:1 purple (dominant) to green (recessive) ratio. :contentReference[oaicite:42]{index=42}"
      },
      {
        q: "In a chi-square table, the term 'o' stands for:",
        choices: [
          "Observed value",
          "Optional value",
          "Original hypothesis",
          "Overall mean"
        ],
        a: 0,
        exp: "The table headings list o for observed value and e for expected value. :contentReference[oaicite:43]{index=43}"
      },
      {
        q: "What is the formula used to compute each contribution to the chi-square statistic?",
        choices: [
          "(o − e) / e",
          "(o − e)^2 / e",
          "(o × e)^2",
          "o^2 − e^2"
        ],
        a: 1,
        exp: "The chi-square table includes a column labeled d^2/e, where d = (o − e). :contentReference[oaicite:44]{index=44}"
      },
      {
        q: "The overall chi-square value (χ²) is calculated as:",
        choices: [
          "The smallest d^2/e value only",
          "The sum of all (o − e) values",
          "The sum of all d^2/e values across categories",
          "The product of all expected values"
        ],
        a: 2,
        exp: "χ² is defined as the sum of d^2/e across all phenotype categories. :contentReference[oaicite:45]{index=45}"
      },
      {
        q: "In Quad 2, which four phenotypic categories are analyzed for the dihybrid cross?",
        choices: [
          "Tall, short, purple, green stems",
          "Four stem-length categories",
          "Green leaf purple stem; green leaf non-purple stem; yellow-green leaf purple stem; yellow-green leaf non-purple stem",
          "Seed color categories only"
        ],
        a: 2,
        exp: "The Quad 2 table lists four combinations of leaf and stem color as separate phenotypes. :contentReference[oaicite:46]{index=46}"
      },
      {
        q: "For the dihybrid F2 in Quad 2, which Mendelian phenotypic ratio is typically expected?",
        choices: [
          "1:1:1:1",
          "9:3:3:1",
          "3:1",
          "2:1"
        ],
        a: 1,
        exp: "The handout has students test class data against the expected 9:3:3:1 ratio for a dihybrid cross. :contentReference[oaicite:47]{index=47}"
      },
      {
        q: "Conceptually, what does the p value represent in the chi-square analysis?",
        choices: [
          "The probability that the hypothesis is false",
          "The probability that any deviation between observed and expected is due to chance",
          "The probability that genes are linked",
          "The proportion of recessive alleles in the population"
        ],
        a: 1,
        exp: "The discussion section asks students to explain that p indicates how likely the observed deviations are if the null hypothesis (Mendelian ratio) is correct. :contentReference[oaicite:48]{index=48}"
      },
      {
        q: "If the chi-square test shows that the observed data do not fit the expected Mendelian ratio, which of the following is a reasonable interpretation?",
        choices: [
          "The data must be discarded automatically",
          "There may be experimental error or the genetic model may not fully explain the trait",
          "The chi-square formula is incorrect",
          "The plants are not diploid"
        ],
        a: 1,
        exp: "The discussion prompts students to consider possible sources of error or factors (like small sample size) when results deviate from expectation. :contentReference[oaicite:49]{index=49}"
      }
    ]
  }
,

  {
    key: "W14_Lab23_19_01_Introduction",
    label: "W14 Lab23 • 19.01 DNA Restriction Analysis – Introduction",
    questions: [
      {
        q: "In the DNA restriction analysis lab, what DNA source is used for the restriction digest?",
        choices: [
          "Human genomic DNA",
          "Lambda bacteriophage DNA",
          "E. coli plasmid pBR322",
          "Yeast mitochondrial DNA"
        ],
        a: 1,
        exp: "The exercise uses DNA from bacteriophage lambda (about 48.5 kb) as the substrate for restriction digestion."
      },
      {
        q: "Which three restriction enzymes are used to cut lambda DNA in this lab?",
        choices: [
          "BamHI, HaeIII, SalI",
          "PstI, EcoRI, and HindIII",
          "TaqI, SmaI, and KpnI",
          "XhoI, NcoI, and BglII"
        ],
        a: 1,
        exp: "The introduction specifies that lambda DNA is incubated separately with PstI, EcoRI, and HindIII."
      },
      {
        q: "Restriction enzymes recognize and cut specific DNA sequences that are typically:",
        choices: [
          "Random stretches of A/T",
          "Palindromes read the same 5' to 3' on both strands",
          "Only GC-rich regions",
          "Only promoter sequences"
        ],
        a: 1,
        exp: "Most restriction endonucleases cut palindromic recognition sites, which read the same in the 5'→3' direction on each strand."
      },
      {
        q: "During agarose gel electrophoresis, DNA fragments migrate toward which electrode?",
        choices: [
          "Negative cathode",
          "Positive anode",
          "They do not move",
          "They move randomly"
        ],
        a: 1,
        exp: "DNA is negatively charged and therefore migrates through the gel toward the positive (anode) electrode."
      },
      {
        q: "Why do smaller DNA fragments move faster through an agarose gel than larger fragments?",
        choices: [
          "They carry less charge",
          "They are more hydrophobic",
          "They pass more easily through the gel matrix pores",
          "They bind more stain"
        ],
        a: 2,
        exp: "Shorter fragments can navigate the pores in the agarose matrix more easily, so they migrate farther in a given time."
      },
      {
        q: "The loading dye contains tracking dyes that migrate approximately like which of the following?",
        choices: [
          "Only the largest DNA fragments",
          "Very small and very large DNA fragments",
          "Proteins present in the sample",
          "RNA contamination"
        ],
        a: 1,
        exp: "Two tracking dyes migrate at rates similar to very small and very large DNA fragments, providing a visual 'bracket' for the migrating DNA."
      },
      {
        q: "Which stain is used in this lab to visualize the DNA bands after electrophoresis?",
        choices: [
          "Crystal violet",
          "Coomassie Brilliant Blue",
          "Methylene blue",
          "Safranin"
        ],
        a: 2,
        exp: "The protocol uses methylene blue, which binds DNA and allows bands to be seen on the gel."
      }
    ]
  },
  {
    key: "W14_Lab23_19_02_Exercise",
    label: "W14 Lab23 • 19.02 Restriction & Gel Electrophoresis – Exercise",
    questions: [
      {
        q: "When setting a micropipetter, what is the FIRST step before taking up liquid?",
        choices: [
          "Depress plunger to the second stop",
          "Place a new tip firmly on the micropipetter",
          "Dip the bare shaft into the solution",
          "Set it to its maximum volume"
        ],
        a: 1,
        exp: "You must attach a clean tip securely before aspirating any solution with a micropipette."
      },
      {
        q: "To take up liquid with the micropipetter, you should depress the plunger to which position before inserting the tip into the solution?",
        choices: [
          "Not depressed at all",
          "Halfway between stops",
          "First stop",
          "Second stop"
        ],
        a: 2,
        exp: "Depressing to the first stop expels air; releasing from the first stop draws the desired volume into the tip."
      },
      {
        q: "In setting up restriction digests, which tube serves as the negative control?",
        choices: [
          "P (PstI) tube",
          "E (EcoRI) tube",
          "H (HindIII) tube",
          "L (lambda DNA uncut) tube"
        ],
        a: 3,
        exp: "The 'L' tube contains lambda DNA with buffer and water but no restriction enzyme, so the DNA remains uncut."
      },
      {
        q: "During gel casting, why is it important not to move the tray while the agarose is solidifying?",
        choices: [
          "Movement causes the agarose to evaporate",
          "Movement can create bubbles or uneven wells",
          "Movement will melt the gel",
          "Movement denatures the DNA"
        ],
        a: 1,
        exp: "Disturbing the tray can lead to slanted or distorted wells and uneven gel thickness."
      },
      {
        q: "In the electrophoresis box, the comb (wells) should be positioned at which end?",
        choices: [
          "At the positive (red) anode end",
          "Exactly in the middle",
          "At the negative (black) cathode end",
          "Outside the gel box"
        ],
        a: 2,
        exp: "Wells are placed at the negative end so that DNA migrates away from the wells toward the positive anode."
      },
      {
        q: "At what voltage is the gel typically run in this lab?",
        choices: [
          "30 V",
          "60 V",
          "90 V",
          "120 V"
        ],
        a: 3,
        exp: "The exercise specifies running the gel at about 120 V for roughly an hour."
      },
      {
        q: "Bromophenol blue and xylene cyanol in the loading dye are useful because they:",
        choices: [
          "Directly bind to DNA and fluoresce",
          "Indicate pH changes during electrophoresis",
          "Serve as visible markers for small and larger fragments as the run progresses",
          "Prevent DNA from leaving the wells"
        ],
        a: 2,
        exp: "These tracking dyes migrate at characteristic rates, letting you monitor the progress of the run and avoid over-running the gel."
      }
    ]
  },
  {
    key: "W14_Lab23_19_03_LabReport",
    label: "W14 Lab23 • 19.03 DNA Restriction Lab Report",
    questions: [
      {
        q: "In this lab report, the DNA used for restriction analysis comes from which source?",
        choices: [
          "Human cheek cells",
          "Lambda bacteriophage",
          "Plant chloroplast DNA",
          "Mouse genomic DNA"
        ],
        a: 1,
        exp: "Both the intro and report questions explicitly identify lambda phage DNA as the DNA source."
      },
      {
        q: "The speed at which a DNA fragment migrates through agarose is directly related to its:",
        choices: [
          "Base composition",
          "Length (size) in base pairs",
          "GC content only",
          "Temperature of the buffer"
        ],
        a: 1,
        exp: "Smaller fragments travel faster and farther; migration distance correlates with fragment size."
      },
      {
        q: "Why are three different restriction enzymes (PstI, EcoRI, HindIII) used in the exercise?",
        choices: [
          "To increase the total amount of DNA",
          "To generate distinct fragment patterns for comparison",
          "To inactivate each other",
          "To change the DNA sequence"
        ],
        a: 1,
        exp: "Each enzyme cuts at different recognition sites, producing characteristic banding patterns that can be compared."
      },
      {
        q: "If your gel shows fewer bands than the ideal reference gel, which is a likely explanation?",
        choices: [
          "The DNA was too concentrated to enter the gel",
          "Some fragments ran off the gel or were too faint to see",
          "Restriction enzymes always produce the same number of fragments",
          "The ladder was loaded incorrectly"
        ],
        a: 1,
        exp: "Smaller fragments can migrate off the gel, and weak bands can be difficult to visualize, reducing the apparent band count."
      },
      {
        q: "Why might band intensity differ between your gel and the ideal gel image?",
        choices: [
          "The DNA sequence changed during electrophoresis",
          "Pipetting volumes and loading efficiency varied",
          "Stain only binds to one end of each fragment",
          "Voltage was constant"
        ],
        a: 1,
        exp: "Unequal DNA loading or partial digestion changes the amount of DNA in each band, altering band intensity."
      },
      {
        q: "Small restriction fragments of nearly the same length may appear as a single band because:",
        choices: [
          "They bind no stain",
          "They do not enter the gel",
          "They co-migrate to the same position and cannot be resolved",
          "They are degraded by the buffer"
        ],
        a: 2,
        exp: "Fragments with very similar sizes run to nearly identical positions, merging into a single visible band."
      },
      {
        q: "The lab report questions mainly assess your ability to:",
        choices: [
          "Memorize plasmid sequences",
          "Interpret gel patterns and relate them to restriction digest conditions",
          "Calculate DNA melting temperature",
          "Predict protein tertiary structure"
        ],
        a: 1,
        exp: "All report questions ask about sources of DNA, migration speed, enzyme combinations, and differences between actual and ideal gels."
      }
    ]
  },
  {
    key: "W14_Lab23_Extra_Biotech_Problems",
    label: "W14 Lab23 • Extra Biotechnology Problems (Restriction Maps & Sanger)",
    questions: [
      {
        q: "When a circular plasmid is digested with a single restriction enzyme and two DNA fragments appear on the gel, how many cut sites does that enzyme have on the plasmid?",
        choices: [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        a: 1,
        exp: "For a circular molecule, the number of fragments equals the number of restriction sites; two bands mean two cut sites."
      },
      {
        q: "Double digests (enzyme A + B) are especially useful for mapping plasmids because they:",
        choices: [
          "Always cut at the same site",
          "Show how fragments from single digests are subdivided by the second enzyme",
          "Remove all restriction sites",
          "Convert circular DNA to RNA"
        ],
        a: 1,
        exp: "By comparing double-digest fragments with single-digest fragments, you can determine how the two sets of sites are arranged on the plasmid."
      },
      {
        q: "In plasmid maps in these exercises, fragment sizes are usually expressed in:",
        choices: [
          "Daltons",
          "Micrometers",
          "Kilobases (kb) or base pairs (bp)",
          "Percent GC"
        ],
        a: 2,
        exp: "The diagrams label fragments as 23 kb, 5 kb, etc., indicating kilobase or base-pair lengths."
      },
      {
        q: "If enzyme A alone produces one band of 23 kb and enzyme B alone produces two bands of 5 kb and 18 kb, what total plasmid size is implied?",
        choices: [
          "5 kb",
          "18 kb",
          "23 kb",
          "28 kb"
        ],
        a: 2,
        exp: "The total plasmid size is the sum of fragment sizes from a complete digest; 5 + 18 = 23 kb, matching the single A band."
      },
      {
        q: "In Sanger sequencing, what do dideoxynucleotides (ddNTPs) do?",
        choices: [
          "Speed up DNA synthesis",
          "Cause random breaks in DNA",
          "Terminate DNA synthesis at specific bases",
          "Remove primers from the template"
        ],
        a: 2,
        exp: "ddNTPs lack a 3' OH group, so their incorporation stops further elongation of the DNA strand at that base."
      },
      {
        q: "In a classic Sanger sequencing gel, each lane corresponds to:",
        choices: [
          "A different template",
          "A different primer",
          "A different termination nucleotide (ddATP, ddCTP, ddGTP, ddTTP)",
          "A different restriction enzyme digest"
        ],
        a: 2,
        exp: "Each reaction contains one type of ddNTP, so each lane represents terminations at A, C, G, or T."
      },
      {
        q: "To read the final DNA sequence from a Sanger gel, you typically:",
        choices: [
          "Read from wells downward, combining all lanes",
          "Read bands from bottom to top, using the lane labels to determine each base",
          "Ignore band order and count lane intensity",
          "Use only the top bands"
        ],
        a: 1,
        exp: "Shortest fragments travel farthest, so you read the gel from bottom to top to reconstruct the 5'→3' sequence."
      }
    ]
  },
  {
    key: "W14_Lab23_Lab26b_DNA_Mapping_Practice",
    label: "W14 Lab23 • Lab 26b DNA Mapping Practice",
    questions: [
      {
        q: "A restriction map of a plasmid shows:",
        choices: [
          "Exact nucleotide sequence",
          "Locations of restriction enzyme cut sites and resulting fragment sizes",
          "Only the genes carried on the plasmid",
          "Only the GC content of each region"
        ],
        a: 1,
        exp: "A restriction map diagrams the positions of restriction sites and the lengths of DNA fragments they produce."
      },
      {
        q: "If two fragments appear after digesting a circular plasmid with a single restriction enzyme, how many times did that enzyme cut the plasmid?",
        choices: [
          "Once",
          "Twice",
          "Three times",
          "Four times"
        ],
        a: 1,
        exp: "For circular DNA, number of fragments equals the number of cuts by that enzyme."
      },
      {
        q: "The first suggested step in solving these practice problems is to:",
        choices: [
          "Draw the plasmid map before looking at the gels",
          "Estimate fragment sizes by eye only",
          "Calculate total plasmid size by adding fragment sizes from one column of the gel",
          "Ignore single digests and focus on double digests"
        ],
        a: 2,
        exp: "You begin by summing fragment sizes from one digest lane to determine the total plasmid length."
      },
      {
        q: "When analyzing single digests, it is helpful to:",
        choices: [
          "Draw each fragment as a linear piece with labeled size",
          "Immediately convert to a circular map",
          "Assume equal fragment sizes",
          "Ignore fragment size units"
        ],
        a: 0,
        exp: "The worksheet recommends sketching each fragment with its size before combining them into a circle."
      },
      {
        q: "If the combination of two double-digest fragments adds up to the size of a single-digest fragment, this suggests that:",
        choices: [
          "The second enzyme cuts within that single-digest fragment",
          "There is a pipetting error",
          "The DNA is linear",
          "The ladder size is wrong"
        ],
        a: 0,
        exp: "The second enzyme likely cut the region produced by the first enzyme, subdividing it into smaller fragments that sum to the original size."
      },
      {
        q: "Why might you need to 'invert' one fragment when drawing the final circular plasmid?",
        choices: [
          "To match the orientation of the gel image",
          "Because plasmids rotate in vivo",
          "To find a configuration where the second enzyme’s fragment sizes match the middle column of the gel",
          "To change the total plasmid size"
        ],
        a: 2,
        exp: "Sometimes flipping the order of fragments along the circle is needed so that predicted single- and double-digest patterns match all lanes."
      },
      {
        q: "These DNA mapping problems emphasize which core skill?",
        choices: [
          "Designing primers",
          "Inferring restriction site positions from gel fragment patterns",
          "Predicting amino acid sequences",
          "Measuring enzyme kinetics"
        ],
        a: 1,
        exp: "The goal is to practice using fragment sizes from single and double digests to deduce where restriction sites occur on a plasmid."
      }
    ]
  },
  {
    key: "W14_Lab23_MolBio_Part2_Results",
    label: "W14 Lab23 • Molecular Biology – Part 2 Results & Standard Curve",
    questions: [
      {
        q: "In Part 2, students sketch DNA bands from their gel and then:",
        choices: [
          "Estimate protein sizes",
          "Record the distance each band traveled in millimeters",
          "Calculate GC content",
          "Measure band fluorescence with a spectrophotometer"
        ],
        a: 1,
        exp: "The worksheet instructs students to sketch the gel and write the distance traveled next to each band."
      },
      {
        q: "Which digest is used as the standard for constructing the DNA size standard curve?",
        choices: [
          "Uncut lambda DNA",
          "EcoRI digest only",
          "PstI digest only",
          "HindIII digest of lambda DNA"
        ],
        a: 3,
        exp: "Students create a standard curve using known HindIII fragments from the gel or from the Lab 23 handout."
      },
      {
        q: "On the standard-curve graph, the x-axis typically represents:",
        choices: [
          "Fragment size (bp or kb)",
          "Migration distance (mm)",
          "Voltage (V)",
          "DNA concentration"
        ],
        a: 1,
        exp: "Distance migrated is plotted against fragment size to build a standard curve relating the two."
      },
      {
        q: "Once the standard curve is built, it is used to:",
        choices: [
          "Determine DNA concentration from absorbance",
          "Estimate unknown fragment sizes from their migration distances",
          "Predict enzyme recognition sequences",
          "Measure buffer pH"
        ],
        a: 1,
        exp: "Students use the curve to convert migration distance of EcoRI and PstI bands into approximate sizes."
      },
      {
        q: "According to the instructions, where is the '0 mm' point assumed to be on the gel image?",
        choices: [
          "At the bottom of the gel",
          "At the middle of the gel",
          "At the top border where the wells are located",
          "One cm above the wells"
        ],
        a: 2,
        exp: "The handout states that the wells are at 0 mm at the top border of the gel image."
      },
      {
        q: "Students are asked to determine at least how many fragment sizes from each EcoRI and PstI digest using the standard curve?",
        choices: [
          "One fragment size each",
          "Two fragment sizes each",
          "Three fragment sizes each",
          "Ten fragment sizes each"
        ],
        a: 2,
        exp: "The directions specify identifying at least three fragment sizes from EcoRI and three from PstI digests."
      },
      {
        q: "The results table in Part 2 has separate columns for each of the following digests:",
        choices: [
          "EcoRI and HindIII only",
          "PstI and uncut only",
          "HindIII, EcoRI, and PstI",
          "Only HindIII"
        ],
        a: 2,
        exp: "The table includes distance and size columns for HindIII, EcoRI, and PstI bands."
      }
    ]
  },
  {
    key: "W14_Lab23_MolBio_Part1_Intro",
    label: "W14 Lab23 • Molecular Biology – Part 1 Introduction",
    questions: [
      {
        q: "Restriction enzymes such as PstI, EcoRI, and HindIII recognize specific DNA sequences that are:",
        choices: [
          "Random and unique to each enzyme batch",
          "Palindromic when read 5'→3' on both strands",
          "Only composed of adenine and thymine",
          "Found only in RNA"
        ],
        a: 1,
        exp: "The background states that most restriction enzymes recognize specific palindromic sequences in DNA."
      },
      {
        q: "The sequence 5' A T T G C A A T 3' is given in the handout. Its complementary strand (3'→5') would be:",
        choices: [
          "3' A T T G C A A T 5'",
          "3' T A A C G T T A 5'",
          "3' G C C A T A A T 5'",
          "3' T T A C G T T A 5'"
        ],
        a: 1,
        exp: "Complementary base pairing (A–T, G–C) yields 3' T A A C G T T A 5'."
      },
      {
        q: "Lambda phage DNA used in this exercise comes from:",
        choices: [
          "A eukaryotic chromosome",
          "A plasmid in E. coli",
          "A virus that infects bacterial cells",
          "Plant chloroplasts"
        ],
        a: 2,
        exp: "The handout explains that lambda phage DNA originates from a bacteriophage, a virus that infects bacteria."
      },
      {
        q: "On an agarose gel, DNA fragments move from which electrode to which?",
        choices: [
          "Positive to negative",
          "Negative to positive",
          "Anode to cathode",
          "They remain at the wells"
        ],
        a: 1,
        exp: "Negatively charged DNA migrates toward the positive electrode."
      },
      {
        q: "In the diagram of HindIII-cut lambda DNA, what question are you asked regarding fragment number?",
        choices: [
          "How many primers are needed?",
          "How many DNA fragments will be produced after restriction digest?",
          "How many base pairs are in each gene?",
          "How many times is the DNA replicated?"
        ],
        a: 1,
        exp: "The worksheet explicitly asks: 'How many DNA fragments will be produced after restriction digest?' based on the indicated HindIII cut sites."
      },
      {
        q: "Using the lambda DNA map and gel image, students must write what information next to each band on the gel?",
        choices: [
          "Enzyme name only",
          "Fragment size in base pairs",
          "Time of loading",
          "Buffer composition"
        ],
        a: 1,
        exp: "Students are instructed to label each band with the corresponding fragment size in base pairs."
      },
      {
        q: "At the bottom of the Part 1 page, students are asked to construct which type of graph for HindIII fragments?",
        choices: [
          "Lineweaver–Burk plot",
          "Growth curve of bacteria",
          "Standard curve of migration distance vs DNA size",
          "pH titration curve"
        ],
        a: 2,
        exp: "They build a standard curve relating migration distance to known HindIII fragment sizes to use later for unknowns."
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


// ===== Component: Exam4_MCQ_Lec15_Lec16 =====

/**
 * BioMegaQuiz — React + Tailwind single-file quiz
 * - 15 questions per module (expanded)
 * - Modules: Plasma Membranes (3 parts), Metabolism (3 parts), Viruses (2 parts)
 * - Mixed mode (All) + module filter, randomization, scoring, review, reshuffle
 */

function Exam4_MCQ_Lec15_Lec16() {
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



const { useState, useMemo, useEffect, useRef, lazy, Suspense } = React;

// All quiz components mapping
const QUIZZES = [
  { key: 'Exam2_MCQ_Lec05_Lec10_Labs', title: 'Exam 2 – MCQ Lec05–Lec10 and Labs', Component: Exam2_MCQ_Lec05_Lec10_Labs },
  { key: 'Exam3_FITB_Lab15_Lab20', title: 'Exam 3 – FITB Lab15–Lab20', Component: Exam3_FITB_Lab15_Lab20 },
  { key: 'Exam3_MCQ_Lec11_Lec14_Lab15_Lab20', title: 'Exam 3 – MCQ Lec11–Lec14 and Lab15–Lab20', Component: Exam3_MCQ_Lec11_Lec14_Lab15_Lab20 },
  { key: 'Exam4_FITB_Lab21_Lab22', title: 'Exam 4 – FITB Lab21–Lab22', Component: Exam4_FITB_Lab21_Lab22 },
  { key: 'Exam4_MCQ_Lab21_Lab23', title: 'Exam 4 – MCQ Lab21–Lab23', Component: Exam4_MCQ_Lab21_Lab23 },
  { key: 'Exam4_MCQ_Lec15_Lec16', title: 'Exam 4 – MCQ Lec15–Lec16', Component: Exam4_MCQ_Lec15_Lec16 }
];

function BioMegaQuiz_15q() {
  const [activeKey, setActiveKey] = useState(null);

  const active = QUIZZES.find(q => q.key === activeKey);

  if (active) {
    const QComp = active.Component;
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <header className="p-4 bg-indigo-700 text-white flex justify-between items-center shadow">
          <h1 className="font-bold text-lg">{active.title}</h1>
          <button
            onClick={() => setActiveKey(null)}
            className="bg-white text-indigo-700 font-semibold px-3 py-1 rounded-lg shadow hover:bg-slate-100"
          >
            ← Back to Menu
          </button>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <QComp />
        </main>
        <footer className="bg-indigo-700 text-white text-center py-3 text-sm italic shadow-inner">
          Built for <span className="font-semibold text-amber-200">Phung-Hieu Diep</span> with Love from Dad ❤️
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Exam Quiz Launcher (BioMegaQuiz_15q)
      </h1>
      <p className="mb-6 text-slate-700 max-w-2xl text-center">
        Select a quiz below. Each button opens a full React quiz module for that exam section.
      </p>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {QUIZZES.map(q => (
          <div key={q.key} className="bg-white rounded-2xl shadow p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 mb-1">{q.title}</h2>
              <p className="text-xs text-slate-500 break-all">{q.key}</p>
            </div>
            <button
              onClick={() => setActiveKey(q.key)}
              className="mt-4 self-start bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Open Quiz
            </button>
          </div>
        ))}
      </div>
      <footer className="mt-8 text-xs text-slate-500 italic">
        This static build is GitHub Pages–ready. No Node/Vite needed to run in the browser.
      </footer>
    </div>
  );
}

// Mount app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BioMegaQuiz_15q />);
