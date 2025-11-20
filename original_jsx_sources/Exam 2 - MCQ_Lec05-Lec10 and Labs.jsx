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