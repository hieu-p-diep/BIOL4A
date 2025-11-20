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