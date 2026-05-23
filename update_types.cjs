const fs = require('fs');
let code = fs.readFileSync('src/types.ts', 'utf8');

const newTypes = `
export interface Stage00 {
  rawIdeaSnapshot: {
    summary: string;
    protagonist: string;
    antagonist: string;
    betrayer: string;
    hiddenAdvantage: string;
    mainPowerSystem: string;
    mainConflict: string;
    finalRevengePromise: string;
  };
  storyDNA: {
    protagonistWound: string;
    antagonistFalseBelief: string;
    betrayerFalseBelief: string;
    hiddenAdvantage: string;
    mainStatusSymbol: string;
    mainProofSystem: string;
    mainArenaOfPower: string;
    finalCollapseType: string;
    differentiationFactor: string;
    viewerEmotionalWait: string;
  };
  coreEmotionalEngine: {
    initialInjustice: string;
    wrongChoice: string;
    heroSilentAdvantage: string;
    firstVisibleCrack: string;
    betrayerFirstDoubt: string;
    antagonistEscalation: string;
    midpointPublicProof: string;
    finalTrap: string;
    finalPublicCollapse: string;
    restoredDignity: string;
  };
  functionVsSurfaceSeparation: {
    requiredEmotionalFunctions: string[];
    surfaceRisks: string[];
  };
  creativeOpeningDiscovery: Array<{
    firstVisualImage: string;
    location: string;
    publicWitnessType: string;
    humiliationMethod: string;
    betrayalObject: string;
    antagonistEntrance: string;
    hiddenDetail: string;
    whyItBelongs: string;
    similarityRisk: string;
    whyNotRecycled: string;
  }>;
  bestOpeningSelection: {
    whyItIsBest: string;
    whyOthersAreWeaker: string;
  };
  openingFingerprint: {
    firstVisualImage: string;
    firstSentenceEnergy: string;
    location: string;
    publicWitnessGroup: string;
    humiliationMethod: string;
    betrayalObject: string;
    antagonistEntrance: string;
    firstStatusSymbol: string;
    firstProofSymbol: string;
    firstHiddenClue: string;
    crowdReactionType: string;
    protagonistReactionStyle: string;
    emotionalTemperature: string;
    soundMotif: string;
    visualMotif: string;
    whatMustNotBeRepeated: string;
    status: string;
  };
  mainTropeSelection: {
    trope: string;
    fitsIdea: string;
    audienceAppeal: string;
    dopaminePromise: string;
    clicheRisk: string;
    howToAvoid: string;
  };
  secondaryTropeSelection: Array<{
    trope: string;
    adds: string;
    strengthens: string;
    escalates: string;
    faceSlap: string;
    risk: string;
  }>;
  emotionalTropeLayer: {
    trope: string;
    emotionalFantasy: string;
    strongestInjustice: string;
    futurePayoff: string;
    regretMoment: string;
    summaryImage: string;
  };
  powerSystemTrope: {
    temporaryPower: string;
    deeperPower: string;
    crowdMisunderstanding: string;
    winningLimitation: string;
    collapseRule: string;
    visualSymbol: string;
  };
  betrayalTrope: {
    who: string;
    whatChosen: string;
    whyMakesSense: string;
    whyUgly: string;
    howVisible: string;
    symbol: string;
    futureTrap: string;
  };
  proofRevealTrope: {
    earlyProof: string;
    midpointProof: string;
    lateProof: string;
    finalProof: string;
    whoMisunderstands: string;
    whoRecognizes: string;
    escalatesRegret: string;
    savedForFinale: string;
  };
  antiClicheTwist: {
    twist: string;
    subverts: string;
    improves: string;
    tension: string;
    preventsOverpowered: string;
    preserveInLaterStages: string;
  };
  tropeMixMatrix: {
    mainTrope: string;
    secondaryTrope: string;
    emotionalTrope: string;
    powerSystemTrope: string;
    betrayalTrope: string;
    proofTrope: string;
    regretTrope: string;
    finalCollapseTrope: string;
    antiClicheTwist: string;
    explanation: string;
  };
  whatThisStoryMustNotBecome: Array<{
    failureMode: string;
    preventionRule: string;
  }>;
  tropeBasedPayoffPromises: string[];
  antiTemplateRiskReport: Array<{
    riskCheck: string;
    preventionNote: string;
  }>;
  finalDecision: {
    decision: string;
    explanation: string;
  };
  handoffPackageToStage01: {
    selectedOpeningConcept: string;
    openingFingerprint: string;
    lockedStoryDNA: string;
    mainTrope: string;
    secondaryTrope: string;
    emotionalTrope: string;
    powerSystemTrope: string;
    betrayalTrope: string;
    proofTrope: string;
    antiClicheTwist: string;
    protagonistWound: string;
    antagonistFalseBelief: string;
    betrayerFalseBelief: string;
    hiddenAdvantage: string;
    mainProofSystem: string;
    trueAllyFunction: string;
    finalCollapseDirection: string;
    surfacesToAvoidByDefault: string[];
    keyOriginalityRule: string;
    keyRuleFor01: string;
  };
}
`;

const afterExportStage01 = code.substring(code.indexOf('export interface Stage01 '));

let finalCode = `${newTypes}\n\n${afterExportStage01}`;
finalCode = finalCode.replace(/export interface Stage02 \{[\s\S]*?\}/, ''); // Remove Stage02
// also need to remove stage02 everywhere it's referenced in FoundationData
finalCode = finalCode.replace(/stage02: Stage02;\n?\s*/, '');

fs.writeFileSync('src/types.ts', finalCode);

