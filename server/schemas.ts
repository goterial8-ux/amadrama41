import { Type } from '@google/genai';


export const ideaSetupSchema = {
  type: Type.OBJECT,
  properties: {
    rawIdeaSnapshot: {
      type: Type.OBJECT,
      properties: {
        summary: { type: Type.STRING },
        protagonist: { type: Type.STRING },
        antagonist: { type: Type.STRING },
        betrayer: { type: Type.STRING },
        hiddenAdvantage: { type: Type.STRING },
        mainPowerSystem: { type: Type.STRING },
        mainConflict: { type: Type.STRING },
        finalRevengePromise: { type: Type.STRING }
      }
    },
    storyDNA: {
      type: Type.OBJECT,
      properties: {
        protagonistWound: { type: Type.STRING },
        antagonistFalseBelief: { type: Type.STRING },
        betrayerFalseBelief: { type: Type.STRING },
        hiddenAdvantage: { type: Type.STRING },
        mainStatusSymbol: { type: Type.STRING },
        mainProofSystem: { type: Type.STRING },
        mainArenaOfPower: { type: Type.STRING },
        finalCollapseType: { type: Type.STRING },
        differentiationFactor: { type: Type.STRING },
        viewerEmotionalWait: { type: Type.STRING }
      }
    },
    coreEmotionalEngine: {
      type: Type.OBJECT,
      properties: {
        initialInjustice: { type: Type.STRING },
        wrongChoice: { type: Type.STRING },
        heroSilentAdvantage: { type: Type.STRING },
        firstVisibleCrack: { type: Type.STRING },
        betrayerFirstDoubt: { type: Type.STRING },
        antagonistEscalation: { type: Type.STRING },
        midpointPublicProof: { type: Type.STRING },
        finalTrap: { type: Type.STRING },
        finalPublicCollapse: { type: Type.STRING },
        restoredDignity: { type: Type.STRING }
      }
    },
    functionVsSurfaceSeparation: {
      type: Type.OBJECT,
      properties: {
        requiredEmotionalFunctions: { type: Type.ARRAY, items: { type: Type.STRING } },
        surfaceRisks: { type: Type.ARRAY, items: { type: Type.STRING } }
      }
    },
    creativeOpeningDiscovery: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          firstVisualImage: { type: Type.STRING },
          location: { type: Type.STRING },
          publicWitnessType: { type: Type.STRING },
          humiliationMethod: { type: Type.STRING },
          betrayalObject: { type: Type.STRING },
          antagonistEntrance: { type: Type.STRING },
          hiddenDetail: { type: Type.STRING },
          whyItBelongs: { type: Type.STRING },
          similarityRisk: { type: Type.STRING },
          whyNotRecycled: { type: Type.STRING }
        }
      }
    },
    bestOpeningSelection: {
      type: Type.OBJECT,
      properties: {
        whyItIsBest: { type: Type.STRING },
        whyOthersAreWeaker: { type: Type.STRING }
      }
    },
    openingFingerprint: {
      type: Type.OBJECT,
      properties: {
        firstVisualImage: { type: Type.STRING },
        firstSentenceEnergy: { type: Type.STRING },
        location: { type: Type.STRING },
        publicWitnessGroup: { type: Type.STRING },
        humiliationMethod: { type: Type.STRING },
        betrayalObject: { type: Type.STRING },
        antagonistEntrance: { type: Type.STRING },
        firstStatusSymbol: { type: Type.STRING },
        firstProofSymbol: { type: Type.STRING },
        firstHiddenClue: { type: Type.STRING },
        crowdReactionType: { type: Type.STRING },
        protagonistReactionStyle: { type: Type.STRING },
        emotionalTemperature: { type: Type.STRING },
        soundMotif: { type: Type.STRING },
        visualMotif: { type: Type.STRING },
        whatMustNotBeRepeated: { type: Type.STRING },
        status: { type: Type.STRING }
      }
    },
    mainTropeSelection: {
      type: Type.OBJECT,
      properties: {
        trope: { type: Type.STRING },
        fitsIdea: { type: Type.STRING },
        audienceAppeal: { type: Type.STRING },
        dopaminePromise: { type: Type.STRING },
        clicheRisk: { type: Type.STRING },
        howToAvoid: { type: Type.STRING }
      }
    },
    secondaryTropeSelection: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          trope: { type: Type.STRING },
          adds: { type: Type.STRING },
          strengthens: { type: Type.STRING },
          escalates: { type: Type.STRING },
          faceSlap: { type: Type.STRING },
          risk: { type: Type.STRING }
        }
      }
    },
    emotionalTropeLayer: {
      type: Type.OBJECT,
      properties: {
        trope: { type: Type.STRING },
        emotionalFantasy: { type: Type.STRING },
        strongestInjustice: { type: Type.STRING },
        futurePayoff: { type: Type.STRING },
        regretMoment: { type: Type.STRING },
        summaryImage: { type: Type.STRING }
      }
    },
    powerSystemTrope: {
      type: Type.OBJECT,
      properties: {
        temporaryPower: { type: Type.STRING },
        deeperPower: { type: Type.STRING },
        crowdMisunderstanding: { type: Type.STRING },
        winningLimitation: { type: Type.STRING },
        collapseRule: { type: Type.STRING },
        visualSymbol: { type: Type.STRING }
      }
    },
    betrayalTrope: {
      type: Type.OBJECT,
      properties: {
        who: { type: Type.STRING },
        whatChosen: { type: Type.STRING },
        whyMakesSense: { type: Type.STRING },
        whyUgly: { type: Type.STRING },
        howVisible: { type: Type.STRING },
        symbol: { type: Type.STRING },
        futureTrap: { type: Type.STRING }
      }
    },
    proofRevealTrope: {
      type: Type.OBJECT,
      properties: {
        earlyProof: { type: Type.STRING },
        midpointProof: { type: Type.STRING },
        lateProof: { type: Type.STRING },
        finalProof: { type: Type.STRING },
        whoMisunderstands: { type: Type.STRING },
        whoRecognizes: { type: Type.STRING },
        escalatesRegret: { type: Type.STRING },
        savedForFinale: { type: Type.STRING }
      }
    },
    antiClicheTwist: {
      type: Type.OBJECT,
      properties: {
        twist: { type: Type.STRING },
        subverts: { type: Type.STRING },
        improves: { type: Type.STRING },
        tension: { type: Type.STRING },
        preventsOverpowered: { type: Type.STRING },
        preserveInLaterStages: { type: Type.STRING }
      }
    },
    tropeMixMatrix: {
      type: Type.OBJECT,
      properties: {
        mainTrope: { type: Type.STRING },
        secondaryTrope: { type: Type.STRING },
        emotionalTrope: { type: Type.STRING },
        powerSystemTrope: { type: Type.STRING },
        betrayalTrope: { type: Type.STRING },
        proofTrope: { type: Type.STRING },
        regretTrope: { type: Type.STRING },
        finalCollapseTrope: { type: Type.STRING },
        antiClicheTwist: { type: Type.STRING },
        explanation: { type: Type.STRING }
      }
    },
    whatThisStoryMustNotBecome: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          failureMode: { type: Type.STRING },
          preventionRule: { type: Type.STRING }
        }
      }
    },
    tropeBasedPayoffPromises: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    antiTemplateRiskReport: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          riskCheck: { type: Type.STRING },
          preventionNote: { type: Type.STRING }
        }
      }
    },
    finalDecision: {
      type: Type.OBJECT,
      properties: {
        decision: { type: Type.STRING },
        explanation: { type: Type.STRING }
      }
    },
    handoffPackageToStage01: {
      type: Type.OBJECT,
      properties: {
        selectedOpeningConcept: { type: Type.STRING },
        openingFingerprint: { type: Type.STRING },
        lockedStoryDNA: { type: Type.STRING },
        mainTrope: { type: Type.STRING },
        secondaryTrope: { type: Type.STRING },
        emotionalTrope: { type: Type.STRING },
        powerSystemTrope: { type: Type.STRING },
        betrayalTrope: { type: Type.STRING },
        proofTrope: { type: Type.STRING },
        antiClicheTwist: { type: Type.STRING },
        protagonistWound: { type: Type.STRING },
        antagonistFalseBelief: { type: Type.STRING },
        betrayerFalseBelief: { type: Type.STRING },
        hiddenAdvantage: { type: Type.STRING },
        mainProofSystem: { type: Type.STRING },
        trueAllyFunction: { type: Type.STRING },
        finalCollapseDirection: { type: Type.STRING },
        surfacesToAvoidByDefault: { type: Type.ARRAY, items: { type: Type.STRING } },
        keyOriginalityRule: { type: Type.STRING },
        keyRuleFor01: { type: Type.STRING }
      }
    }
  }
};



export const foundationDnaSchema = {
  type: Type.OBJECT,
  properties: {
    handoffRecap: {
      type: Type.OBJECT,
      properties: {
        selectedOpeningConcept: { type: Type.STRING },
        openingFingerprintSummary: { type: Type.STRING },
        lockedStoryDNA: { type: Type.STRING },
        mainTrope: { type: Type.STRING },
        secondaryTrope: { type: Type.STRING },
        emotionalTrope: { type: Type.STRING },
        powerSystemTrope: { type: Type.STRING },
        betrayalTrope: { type: Type.STRING },
        proofTrope: { type: Type.STRING },
        antiClicheTwist: { type: Type.STRING },
        protagonistWound: { type: Type.STRING },
        antagonistFalseBelief: { type: Type.STRING },
        betrayerFalseBelief: { type: Type.STRING },
        hiddenAdvantage: { type: Type.STRING },
        trueAllyFunction: { type: Type.STRING },
        finalCollapseDirection: { type: Type.STRING },
        surfacesToAvoidByDefault: { type: Type.ARRAY, items: { type: Type.STRING } },
        keyOriginalityRule: { type: Type.STRING }
      }
    },
    protagonistFunctionLock: {
      type: Type.OBJECT,
      properties: {
        publicIdentity: { type: Type.STRING },
        hiddenIdentity: { type: Type.STRING },
        emotionalWound: { type: Type.STRING },
        coreSkill: { type: Type.STRING },
        mainRestraint: { type: Type.STRING },
        whyNotRevealImmediately: { type: Type.STRING },
        whatHeUnderstands: { type: Type.STRING },
        appearsToLose: { type: Type.STRING },
        actuallyGains: { type: Type.STRING },
        quietlyCollects: { type: Type.STRING },
        moralOrStrategicLimit: { type: Type.STRING },
        finalDignityRegained: { type: Type.STRING }
      }
    },
    antagonistFunctionLock: {
      type: Type.OBJECT,
      properties: {
        publicMask: { type: Type.STRING },
        realWeakness: { type: Type.STRING },
        falseBelief: { type: Type.STRING },
        sourceOfTemporaryPower: { type: Type.STRING },
        whatTheyEnvyOrFear: { type: Type.STRING },
        whyTheyUnderestimate: { type: Type.STRING },
        whyTheyEscalate: { type: Type.STRING },
        earlySuccessFeedsEgo: { type: Type.STRING },
        firstCrackThreatensIdentity: { type: Type.STRING },
        lineEventuallyCrossed: { type: Type.STRING },
        howChoicesPrepareCollapse: { type: Type.STRING },
        finalConsequence: { type: Type.STRING }
      }
    },
    betrayerFunctionLock: {
      type: Type.OBJECT,
      properties: {
        publicRole: { type: Type.STRING },
        privateDesire: { type: Type.STRING },
        whatTheyWantFromAntagonist: { type: Type.STRING },
        whyTheyChooseWrong: { type: Type.STRING },
        whyChoiceMakesSense: { type: Type.STRING },
        whyChoiceMorallyUgly: { type: Type.STRING },
        whatTheyIgnore: { type: Type.STRING },
        howTheyLegitimizeEnemy: { type: Type.STRING },
        firstDoubtMustAppear: { type: Type.STRING },
        whatTheyTryToRationalize: { type: Type.STRING },
        whatRegretSlowlyGrows: { type: Type.STRING },
        whyNoCheapForgiveness: { type: Type.STRING }
      }
    },
    trueAllyFunctionLock: {
      type: Type.OBJECT,
      properties: {
        publicRole: { type: Type.STRING },
        whyTheyMatter: { type: Type.STRING },
        whatTheyRecognize: { type: Type.STRING },
        howTheyTestProtagonist: { type: Type.STRING },
        howTheyHelpProofSystem: { type: Type.STRING },
        howTheyIncreaseCredibility: { type: Type.STRING },
        howTheyContrastWithBetrayer: { type: Type.STRING },
        whyNotJustRomanticPrize: { type: Type.STRING },
        romanceStatus: { type: Type.STRING },
        finalPartnership: { type: Type.STRING }
      }
    },
    supportingForceLock: {
      type: Type.OBJECT,
      properties: {
        whatGivesAntagonistPower: { type: Type.STRING },
        whyItSupportsWrongPerson: { type: Type.STRING },
        whatItMisunderstands: { type: Type.STRING },
        whatItFearsLosing: { type: Type.STRING },
        howItPressuresProtagonist: { type: Type.STRING },
        howItBecomesPartOfProof: { type: Type.STRING },
        howItReactsWhenTruthLeaks: { type: Type.STRING },
        finalConsequenceSuffered: { type: Type.STRING }
      }
    },
    coreEmotionalChain: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          stepName: { type: Type.STRING },
          emotionalFunction: { type: Type.STRING },
          viewerShouldFeel: { type: Type.STRING },
          enemyBelieves: { type: Type.STRING },
          protagonistUnderstands: { type: Type.STRING },
          proofOrPayoff: { type: Type.STRING },
          mustNotBeRevealedYet: { type: Type.STRING }
        }
      }
    },
    humiliationLadder: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          formOfHumiliation: { type: Type.STRING },
          whoWitnesses: { type: Type.STRING },
          whyItHurts: { type: Type.STRING },
          whyProtagonistDoesNotRetaliateYet: { type: Type.STRING },
          hiddenAdvantageViewerUnderstands: { type: Type.STRING },
          howItWillLaterReverse: { type: Type.STRING }
        }
      }
    },
    protagonistControlLadder: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          appearsToLose: { type: Type.STRING },
          actuallyGains: { type: Type.STRING },
          whatHeObserves: { type: Type.STRING },
          proofHeCollects: { type: Type.STRING },
          ruleSystemHeUnderstands: { type: Type.STRING },
          choosesNotToReveal: { type: Type.STRING },
          howControlBecomesMoreVisible: { type: Type.STRING }
        }
      }
    },
    betrayerRegretLadder: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          betrayerBelieves: { type: Type.STRING },
          whatTheySee: { type: Type.STRING },
          explainItAway: { type: Type.STRING },
          whatMakesDoubtGrow: { type: Type.STRING },
          publicPrivateMomentAffectsThem: { type: Type.STRING },
          howStatusChanges: { type: Type.STRING },
          whyTheyStillDoNotFullyApologizeYet: { type: Type.STRING },
          whatLaterBreaksThem: { type: Type.STRING }
        }
      }
    },
    antagonistEscalationLadder: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          whatAntagonistWants: { type: Type.STRING },
          whatTheyBelieveAboutThemselves: { type: Type.STRING },
          earlySuccessFeedsEgo: { type: Type.STRING },
          firstCrackThreatensIdentity: { type: Type.STRING },
          howTheyOvercompensate: { type: Type.STRING },
          howTheyEscalateLogically: { type: Type.STRING },
          whatLineTheyCross: { type: Type.STRING },
          howActionPreparesFinalCollapse: { type: Type.STRING }
        }
      }
    },
    trueAllyRecognitionLadder: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          whatAllySees: { type: Type.STRING },
          whatTheyTest: { type: Type.STRING },
          whatProtagonistRevealsOrHides: { type: Type.STRING },
          howAllyHelpsProofSystem: { type: Type.STRING },
          howTheyIncreaseCredibility: { type: Type.STRING },
          howContrastWithBetrayer: { type: Type.STRING }
        }
      }
    },
    publicPayoffLadder: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          payoffType: { type: Type.STRING },
          emotionalFunction: { type: Type.STRING },
          whoWitnessesIt: { type: Type.STRING },
          whatFalseBeliefCracks: { type: Type.STRING },
          whatProofOrActionCausesShift: { type: Type.STRING },
          whoGainsStatus: { type: Type.STRING },
          whoLosesStatus: { type: Type.STRING },
          whatNewProblemItCreates: { type: Type.STRING }
        }
      }
    },
    hiddenCardRevealSchedule: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          hiddenCardNumberAndName: { type: Type.STRING },
          whatItIs: { type: Type.STRING },
          whoKnows: { type: Type.STRING },
          whenItIsHinted: { type: Type.STRING },
          whenPartiallyRevealed: { type: Type.STRING },
          whenPubliclyRevealed: { type: Type.STRING },
          whatItChanges: { type: Type.STRING }
        }
      }
    },
    proofSystemLock: {
      type: Type.OBJECT,
      properties: {
        earlyProof: { type: Type.STRING },
        midpointProof: { type: Type.STRING },
        lateProof: { type: Type.STRING },
        finalProof: { type: Type.STRING },
        whoMisunderstandsEachProof: { type: Type.STRING },
        whoRecognizesEachProof: { type: Type.STRING },
        howEachProofBecomesPublic: { type: Type.STRING },
        howProofCreatesRegret: { type: Type.STRING },
        howProofDestroysEnemyIdentity: { type: Type.STRING },
        whichProofMustBeSavedForFinalCollapse: { type: Type.STRING }
      }
    },
    costAndConsequenceLadder: {
      type: Type.OBJECT,
      properties: {
        costPaidByProtagonist: { type: Type.STRING },
        costPaidByAntagonist: { type: Type.STRING },
        costPaidByBetrayer: { type: Type.STRING },
        costPaidByInstitutionOrCrowd: { type: Type.STRING },
        delayedConsequence: { type: Type.STRING },
        finalIrreversibleConsequence: { type: Type.STRING }
      }
    },
    faceSlapVariationMap: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          faceSlapType: { type: Type.STRING },
          whatFalseBeliefItAttacks: { type: Type.STRING },
          whatProofTypeItUses: { type: Type.STRING },
          whyFeelsSatisfying: { type: Type.STRING },
          whatShouldAvoidRepeating: { type: Type.STRING }
        }
      }
    },
    pacingRhythmMapFor9Parts: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          partNumber: { type: Type.STRING },
          emotionalRole: { type: Type.STRING },
          primaryDopamineElement: { type: Type.STRING },
          secondaryTension: { type: Type.STRING },
          regretMovement: { type: Type.STRING },
          antagonistMovement: { type: Type.STRING },
          hiddenCardMovement: { type: Type.STRING },
          endingHookDirection: { type: Type.STRING }
        }
      }
    },
    antiRepetitionCheck: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          riskQuestion: { type: Type.STRING },
          correctionNote: { type: Type.STRING }
        }
      }
    },
    foundationFinalDecision: {
      type: Type.OBJECT,
      properties: {
        decision: { type: Type.STRING },
        explanation: { type: Type.STRING }
      }
    },
    handoffPackageToStage02: {
      type: Type.OBJECT,
      properties: {
        selectedOpeningConcept: { type: Type.STRING },
        lockedStoryDNA: { type: Type.STRING },
        characterFunctionSummary: { type: Type.STRING },
        protagonistControlLadderSummary: { type: Type.STRING },
        betrayerRegretLadderSummary: { type: Type.STRING },
        antagonistEscalationLadderSummary: { type: Type.STRING },
        trueAllyRecognitionLadderSummary: { type: Type.STRING },
        publicPayoffLadderSummary: { type: Type.STRING },
        hiddenCardSchedule: { type: Type.STRING },
        proofSystemLock: { type: Type.STRING },
        costLadder: { type: Type.STRING },
        faceSlapVariationMap: { type: Type.STRING },
        pacingRhythmMap: { type: Type.STRING },
        surfacesToAvoidByDefault: { type: Type.ARRAY, items: { type: Type.STRING } },
        mainRisksFor02MacroOutline: { type: Type.ARRAY, items: { type: Type.STRING } },
        keyRuleForNextStage: { type: Type.STRING }
      }
    }
  }
};

export const foundationSchema01_03_04 = {
  type: Type.OBJECT,
  properties: {
    stage01: {
      type: Type.OBJECT,
      properties: {
        logline: { type: Type.STRING },
        titleHooks: { type: Type.ARRAY, items: { type: Type.STRING } },
        protagonistProfile: { type: Type.STRING },
        antagonistProfile: { type: Type.STRING },
        betrayerProfile: { type: Type.STRING },
        trueAllyProfile: { type: Type.STRING },
        hiddenAdvantage: { type: Type.STRING },
        mainBetrayal: { type: Type.STRING },
        firstPublicWound: { type: Type.STRING },
        proofSystem: { type: Type.STRING },
        regretPath: { type: Type.STRING },
        finalPunishment: { type: Type.STRING },
        reasonForDelayingReveal: { type: Type.STRING },
      },
    },
    stage02: {
      type: Type.OBJECT,
      properties: {
        mainTrope: { type: Type.STRING },
        secondaryTrope: { type: Type.STRING },
        emotionalTrope: { type: Type.STRING },
        powerTrope: { type: Type.STRING },
        betrayalTrope: { type: Type.STRING },
        antiClicheTwist: { type: Type.STRING },
        nonGenericFactor: { type: Type.STRING },
        avoidedSurfaces: { type: Type.ARRAY, items: { type: Type.STRING } },
      },
    },
    stage03: {
      type: Type.OBJECT,
      properties: {
        humiliationLadder: { type: Type.ARRAY, items: { type: Type.STRING } },
        protagonistControlLadder: { type: Type.ARRAY, items: { type: Type.STRING } },
        betrayalRegretLadder: { type: Type.ARRAY, items: { type: Type.STRING } },
        antagonistEscalationLadder: { type: Type.ARRAY, items: { type: Type.STRING } },
        publicPayoffLadder: { type: Type.ARRAY, items: { type: Type.STRING } },
        hiddenCardRevealSchedule: { type: Type.ARRAY, items: { type: Type.STRING } },
      },
    },
    stage04: {
      type: Type.OBJECT,
      properties: {
        characters: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              role: { type: Type.STRING, description: "protagonist, antagonist, etc." },
              whatTheyWant: { type: Type.STRING },
              whatTheyBelieve: { type: Type.STRING },
              whatTheyMisunderstand: { type: Type.STRING },
              whyTheyMakeWrongChoice: { type: Type.STRING },
              howTheyReactToEarlyProof: { type: Type.STRING },
              howTheyEscalate: { type: Type.STRING },
              whatBreaksThemInTheEnd: { type: Type.STRING },
            },
          },
        },
      },
    },
  },
};



export const macroOutlineSchema = {
  type: Type.OBJECT,
  properties: {
    handoffRecap: {
      type: Type.OBJECT,
      properties: {
        selectedOpeningConcept: { type: Type.STRING },
        lockedStoryDNA: { type: Type.STRING },
        protagonistFunction: { type: Type.STRING },
        antagonistFunction: { type: Type.STRING },
        betrayerFunction: { type: Type.STRING },
        trueAllyFunction: { type: Type.STRING },
        powerSystemLogic: { type: Type.STRING },
        proofSystemLock: { type: Type.STRING },
        hiddenCardSchedule: { type: Type.STRING },
        faceSlapVariationMap: { type: Type.STRING },
        finalCollapseDirection: { type: Type.STRING },
        surfacesToAvoidByDefault: { type: Type.ARRAY, items: { type: Type.STRING } },
        keyRuleForThisStage: { type: Type.STRING }
      }
    },
    totalLengthPlan: {
      type: Type.OBJECT,
      properties: {
        totalTarget: { type: Type.STRING },
        parts: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              partNumber: { type: Type.STRING },
              targetCharacterRange: { type: Type.STRING },
              reasonForLength: { type: Type.STRING },
              dramaWeight: { type: Type.STRING }
            }
          }
        }
      }
    },
    macroOutlineOverview: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          partNumber: { type: Type.STRING },
          partTitle: { type: Type.STRING },
          targetCharacterRange: { type: Type.STRING },
          mainDramaticFunction: { type: Type.STRING },
          emotionalRole: { type: Type.STRING },
          mainConflict: { type: Type.STRING },
          primaryDopaminePayoff: { type: Type.STRING },
          secondaryTension: { type: Type.STRING },
          regretMovement: { type: Type.STRING },
          antagonistMovement: { type: Type.STRING },
          hiddenCardMovement: { type: Type.STRING },
          endingHook: { type: Type.STRING }
        }
      }
    },
    partByPartDetailedOutline: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          partNumber: { type: Type.STRING },
          partTitle: { type: Type.STRING },
          targetCharacterRange: { type: Type.STRING },
          partFunction: { type: Type.STRING },
          startingState: { type: Type.STRING },
          mainConflict: { type: Type.STRING },
          protagonistObjective: { type: Type.STRING },
          antagonistObjective: { type: Type.STRING },
          betrayerMovement: { type: Type.STRING },
          trueAllyMovement: { type: Type.STRING },
          proofHiddenCardMovement: { type: Type.STRING },
          publicPayoff: { type: Type.STRING },
          costConsequence: { type: Type.STRING },
          whyNotRepetitive: { type: Type.STRING },
          endingHook: { type: Type.STRING }
        }
      }
    },
    publicPayoffMap: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          part: { type: Type.STRING },
          payoffType: { type: Type.STRING },
          whoWitnessesIt: { type: Type.STRING },
          whatFalseBeliefCracks: { type: Type.STRING },
          whoGainsStatus: { type: Type.STRING },
          whoLosesStatus: { type: Type.STRING },
          whatNewProblemItCreates: { type: Type.STRING }
        }
      }
    },
    regretMovementMap: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          part: { type: Type.STRING },
          betrayerEmotionalState: { type: Type.STRING },
          whatTheyBelieve: { type: Type.STRING },
          whatTheySee: { type: Type.STRING },
          howTheyRationalizeIt: { type: Type.STRING },
          whatChangesByEnd: { type: Type.STRING }
        }
      }
    },
    antagonistEscalationMap: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          part: { type: Type.STRING },
          antagonistBelief: { type: Type.STRING },
          antagonistAction: { type: Type.STRING },
          whyActionMakesSense: { type: Type.STRING },
          whatItCostsThem: { type: Type.STRING },
          howItPreparesCollapse: { type: Type.STRING }
        }
      }
    },
    protagonistControlMap: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          part: { type: Type.STRING },
          appearsToLose: { type: Type.STRING },
          actuallyGains: { type: Type.STRING },
          whatHeObserves: { type: Type.STRING },
          whatProofCollects: { type: Type.STRING },
          whatHeChoosesNotToReveal: { type: Type.STRING },
          howControlBecomesVisible: { type: Type.STRING }
        }
      }
    },
    hiddenCardMap: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          cardName: { type: Type.STRING },
          whenHinted: { type: Type.STRING },
          whenPartiallyRevealed: { type: Type.STRING },
          whenViewerUnderstands: { type: Type.STRING },
          whenAntagonistMisunderstands: { type: Type.STRING },
          whenPublicLearns: { type: Type.STRING },
          whenBecomesIrreversibleProof: { type: Type.STRING }
        }
      }
    },
    faceSlapVariationPlan: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          payoffType: { type: Type.STRING },
          whatFalseBeliefItAttacks: { type: Type.STRING },
          whatProofOrActionCausesIt: { type: Type.STRING },
          whySatisfying: { type: Type.STRING },
          likelyPart: { type: Type.STRING },
          whatMustAvoidRepeating: { type: Type.STRING }
        }
      }
    },
    sceneSurfaceGuidance: {
      type: Type.OBJECT,
      properties: {
        surfacesThatFit: { type: Type.STRING },
        surfacesToAvoid: { type: Type.STRING },
        surfaceRepetitionRisks: { type: Type.STRING },
        howToVaryLocations: { type: Type.STRING },
        publicArenasAllowed: { type: Type.STRING },
        privateScenesToKeepShort: { type: Type.STRING },
        protectedOpeningSurface: { type: Type.STRING }
      }
    },
    pacingRiskCheck: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          riskQuestion: { type: Type.STRING },
          correction: { type: Type.STRING }
        }
      }
    },
    macroOutlineFinalDecision: {
      type: Type.OBJECT,
      properties: {
        decision: { type: Type.STRING },
        explanation: { type: Type.STRING }
      }
    },
    handoffPackageToStage03: {
      type: Type.OBJECT,
      properties: {
        multiPartSummary: { type: Type.STRING },
        targetCharacterCountPerPart: { type: Type.STRING },
        partFunctionList: { type: Type.STRING },
        publicPayoffMap: { type: Type.STRING },
        regretMovementMap: { type: Type.STRING },
        antagonistEscalationMap: { type: Type.STRING },
        protagonistControlMap: { type: Type.STRING },
        hiddenCardMap: { type: Type.STRING },
        faceSlapVariationPlan: { type: Type.STRING },
        sceneSurfaceGuidance: { type: Type.STRING },
        surfacesToAvoidByDefault: { type: Type.ARRAY, items: { type: Type.STRING } },
        mainRisksFor03: { type: Type.ARRAY, items: { type: Type.STRING } },
        keyRuleForNextStage: { type: Type.STRING }
      }
    }
  }
};

export const outlineSchema = {
    type: Type.OBJECT,
    properties: {
      parts: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            partNumber: { type: Type.INTEGER },
            targetCharacterCount: { type: Type.STRING },
            partFunction: { type: Type.STRING },
            openingHook: { type: Type.STRING },
            mainConflict: { type: Type.STRING },
            publicOrVisiblePayoff: { type: Type.STRING },
            hiddenCardStatus: { type: Type.STRING },
            enemyAction: { type: Type.STRING },
            protagonistCounteraction: { type: Type.STRING },
            regretMovement: { type: Type.STRING },
            endingHook: { type: Type.STRING },
          }
        }
      }
    }
};


export const sceneCardsSchema = {
  type: Type.OBJECT,
  properties: {
    handoffRecap: {
      type: Type.OBJECT,
      properties: {
        macroOutlineSummary: { type: Type.STRING },
        partFunctionList: { type: Type.STRING },
        publicPayoffMapSummary: { type: Type.STRING },
        regretMovementMapSummary: { type: Type.STRING },
        antagonistEscalationMapSummary: { type: Type.STRING },
        protagonistControlMapSummary: { type: Type.STRING },
        hiddenCardMapSummary: { type: Type.STRING },
        faceSlapVariationPlan: { type: Type.STRING },
        sceneSurfaceGuidance: { type: Type.STRING },
        surfacesToAvoidByDefault: { type: Type.ARRAY, items: { type: Type.STRING } },
        keyRuleForThisStage: { type: Type.STRING }
      }
    },
    totalSceneStrategy: {
      type: Type.OBJECT,
      properties: {
        totalScenes: { type: Type.STRING },
        reasonForDistribution: { type: Type.STRING },
        partsNeedingMoreScenes: { type: Type.STRING },
        partsToStayCompressed: { type: Type.STRING },
        howCountSupportsTotalCharacters: { type: Type.STRING },
        partStrategyTable: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              part: { type: Type.STRING },
              targetCharacters: { type: Type.STRING },
              sceneCount: { type: Type.STRING },
              reason: { type: Type.STRING }
            }
          }
        }
      }
    },
    openingSurfaceOriginalityCheck: {
      type: Type.OBJECT,
      properties: {
        selectedOpeningSurface: { type: Type.STRING },
        firstVisualImage: { type: Type.STRING },
        firstPublicWitnessGroup: { type: Type.STRING },
        firstHumiliationMethod: { type: Type.STRING },
        firstProofSymbol: { type: Type.STRING },
        firstHiddenClue: { type: Type.STRING },
        similarityRisk: { type: Type.STRING },
        whyNotGeneric: { type: Type.STRING },
        decision: { type: Type.STRING }
      }
    },
    sceneSurfaceDiversityPlan: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          surface: { type: Type.STRING },
          partsAppearingIn: { type: Type.STRING },
          whyItFitsPremise: { type: Type.STRING },
          dramaticFunction: { type: Type.STRING },
          differenceFromOthers: { type: Type.STRING }
        }
      }
    },
    completeSceneCardsByPart: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          partNumber: { type: Type.STRING },
          partTitle: { type: Type.STRING },
          targetCharacterRange: { type: Type.STRING },
          sceneCount: { type: Type.STRING },
          partFunction: { type: Type.STRING },
          partLevelPayoff: { type: Type.STRING },
          partLevelHiddenCardMovement: { type: Type.STRING },
          partLevelRegretMovement: { type: Type.STRING },
          partLevelEndingHook: { type: Type.STRING },
          scenes: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                sceneIdentifier: { type: Type.STRING },
                sceneTitle: { type: Type.STRING },
                estimatedLength: { type: Type.STRING },
                sceneSurface: { type: Type.STRING },
                sceneFunction: { type: Type.STRING },
                startingState: { type: Type.STRING },
                charactersPresent: { type: Type.STRING },
                povFocus: { type: Type.STRING },
                protagonistObjective: { type: Type.STRING },
                antagonistPressureObjective: { type: Type.STRING },
                mainConflict: { type: Type.STRING },
                whatHappens: { type: Type.STRING },
                proofHiddenCardMovement: { type: Type.STRING },
                publicVisiblePayoff: { type: Type.STRING },
                statusShift: { type: Type.STRING },
                regretMovement: { type: Type.STRING },
                antagonistMovement: { type: Type.STRING },
                protagonistControlMovement: { type: Type.STRING },
                trueAllyMovement: { type: Type.STRING },
                costConsequence: { type: Type.STRING },
                dialogueFunction: { type: Type.STRING },
                whatMustNotBeLongDialogue: { type: Type.STRING },
                visualProofImage: { type: Type.STRING },
                soundAtmosphereNote: { type: Type.STRING },
                exitHook: { type: Type.STRING },
                repetitionRisk: { type: Type.STRING },
                preventionNote: { type: Type.STRING }
              }
            }
          }
        }
      }
    },
    publicPayoffDistributionCheck: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          scene: { type: Type.STRING },
          payoffType: { type: Type.STRING },
          witnesses: { type: Type.STRING },
          falseBeliefCracked: { type: Type.STRING },
          statusShift: { type: Type.STRING },
          repetitionRisk: { type: Type.STRING }
        }
      }
    },
    hiddenCardTimingCheck: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          hiddenCard: { type: Type.STRING },
          hintScenes: { type: Type.STRING },
          partialRevealScenes: { type: Type.STRING },
          viewerUnderstanding: { type: Type.STRING },
          publicReveal: { type: Type.STRING },
          mustNotRevealBefore: { type: Type.STRING }
        }
      }
    },
    regretAndPanicCheck: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          part: { type: Type.STRING },
          betrayerState: { type: Type.STRING },
          betrayerChanges: { type: Type.STRING },
          antagonistState: { type: Type.STRING },
          antagonistEscalates: { type: Type.STRING }
        }
      }
    },
    protagonistControlCheck: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          part: { type: Type.STRING },
          appearsToLose: { type: Type.STRING },
          actuallyGains: { type: Type.STRING },
          proofCollected: { type: Type.STRING },
          choosesNotToReveal: { type: Type.STRING },
          controlBecomesMoreVisible: { type: Type.STRING }
        }
      }
    },
    dialogueControlCheck: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          riskyScene: { type: Type.STRING },
          shownVisually: { type: Type.STRING },
          shortSharpDialogue: { type: Type.STRING },
          notExplainedInMonologue: { type: Type.STRING },
          proofObjectActionCarrier: { type: Type.STRING }
        }
      }
    },
    finalScriptReadinessCheck: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          checkQuestion: { type: Type.STRING },
          correction: { type: Type.STRING }
        }
      }
    },
    sceneCardsFinalDecision: {
      type: Type.OBJECT,
      properties: {
        decision: { type: Type.STRING },
        explanation: { type: Type.STRING }
      }
    },
    handoffPackageToStage04: {
      type: Type.OBJECT,
      properties: {
        totalSceneCount: { type: Type.STRING },
        sceneCountByPart: { type: Type.STRING },
        approvedOpeningFingerprint: { type: Type.STRING },
        completeSceneMatrixSummary: { type: Type.STRING },
        keyProofObjects: { type: Type.STRING },
        hiddenCardTiming: { type: Type.STRING },
        regretPanicTracks: { type: Type.STRING },
        protagonistControlNotes: { type: Type.STRING },
        payoffDistribution: { type: Type.STRING },
        surfacesToAvoid: { type: Type.STRING },
        dialogueControlNotes: { type: Type.STRING },
        finalWritingRulesFor04: { type: Type.STRING }
      }
    }
  }
};

export const sceneSchema = {
    type: Type.OBJECT,
    properties: {
      parts: {
        type: Type.ARRAY,
        items: {
            type: Type.OBJECT,
            properties: {
                partNumber: { type: Type.INTEGER },
                scenes: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            location: { type: Type.STRING },
                            charactersPresent: { type: Type.ARRAY, items: { type: Type.STRING } },
                            sceneType: { type: Type.STRING },
                            sceneFunction: { type: Type.STRING },
                            startingState: { type: Type.STRING },
                            protagonistGoal: { type: Type.STRING },
                            enemyGoal: { type: Type.STRING },
                            mainConflict: { type: Type.STRING },
                            whatHappens: { type: Type.STRING },
                            proofUsed: { type: Type.STRING },
                            publicReaction: { type: Type.STRING },
                            statusShift: { type: Type.STRING },
                            dialogueFunction: { type: Type.STRING },
                            whatMustNotBecomeLongDialogue: { type: Type.STRING },
                            protagonistRisk: { type: Type.STRING },
                            enemyPanic: { type: Type.STRING },
                            regretStep: { type: Type.STRING },
                            hiddenCardStatus: { type: Type.STRING },
                            cost: { type: Type.STRING },
                            relationshipShift: { type: Type.STRING },
                            povNotes: { type: Type.STRING },
                            visualDetails: { type: Type.STRING },
                            exitHook: { type: Type.STRING },
                            visibleDopamineElement: { type: Type.STRING },
                        }
                    }
                }
            }
        }
      }
    }
};

export const qaSchema = {
    type: Type.OBJECT,
    properties: {
        passed: { type: Type.BOOLEAN },
        issues: { type: Type.ARRAY, items: { type: Type.STRING } },
        totalLengthRef: { type: Type.STRING },
        feedback: { type: Type.STRING }
    }
};
