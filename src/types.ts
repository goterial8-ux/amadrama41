
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


export interface Stage01 {
  logline: string;
  titleHooks: string[];
  protagonistProfile: string;
  antagonistProfile: string;
  betrayerProfile: string;
  trueAllyProfile: string;
  hiddenAdvantage: string;
  mainBetrayal: string;
  firstPublicWound: string;
  proofSystem: string;
  regretPath: string;
  finalPunishment: string;
  reasonForDelayingReveal: string;
}



export interface Stage03 {
  humiliationLadder: string[];
  protagonistControlLadder: string[];
  betrayalRegretLadder: string[];
  antagonistEscalationLadder: string[];
  publicPayoffLadder: string[];
  hiddenCardRevealSchedule: string[];
}

export interface CharacterLogic {
  name: string;
  role: 'protagonist' | 'antagonist' | 'betrayer' | 'ally' | 'other';
  whatTheyWant: string;
  whatTheyBelieve: string;
  whatTheyMisunderstand: string;
  whyTheyMakeWrongChoice: string;
  howTheyReactToEarlyProof: string;
  howTheyEscalate: string;
  whatBreaksThemInTheEnd: string;
}

export interface Stage04 {
  characters: CharacterLogic[];
}

export interface OutlinePart {
  partNumber: number;
  targetCharacterCount: string;
  partFunction: string;
  openingHook: string;
  mainConflict: string;
  publicOrVisiblePayoff: string;
  hiddenCardStatus: string;
  enemyAction: string;
  protagonistCounteraction: string;
  regretMovement: string;
  endingHook: string;
}

export interface Stage05 {
  parts: OutlinePart[];
}

export interface SceneCard {
  location: string;
  charactersPresent: string[];
  sceneType: string;
  sceneFunction: string;
  startingState: string;
  protagonistGoal: string;
  enemyGoal: string;
  mainConflict: string;
  whatHappens: string;
  proofUsed: string;
  publicReaction: string;
  statusShift: string;
  dialogueFunction: string;
  whatMustNotBecomeLongDialogue: string;
  protagonistRisk: string;
  enemyPanic: string;
  regretStep: string;
  hiddenCardStatus: string;
  cost: string;
  relationshipShift: string;
  povNotes: string;
  visualDetails: string;
  exitHook: string;
  visibleDopamineElement: string;
}

export interface Stage06Part {
  partNumber: number;
  scenes: SceneCard[];
}

export interface Stage06 {
  parts: Stage06Part[];
}

export interface QAStatus {
  passed: boolean;
  issues: string[];
}

export interface Stage08 {
  totalLengthRef: string;
  repeatedScenesCheck: QAStatus;
  openingFreshnessCheck: QAStatus;
  enemyLogicCheck: QAStatus;
  pacingCheck: QAStatus;
  overallFeedback: string;
}

export interface ProjectData {
  id: string;
  rawIdea: string;
  status: 'idle' | 'generating_foundation' | 'generating_outline' | 'generating_scenes' | 'generating_script' | 'qa' | 'complete' | 'error';
  currentScriptPart?: number;
  stage00?: any;
  stage01?: any;
  stage02?: any;
  stage03?: any;
  stage04?: any;
  stage05?: any;
  stage06?: any;
  stage07?: any;
  stage08?: any;
  error?: string;
  createdAt: number;
  updatedAt: number;
}
