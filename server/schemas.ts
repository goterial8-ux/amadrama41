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
        hiddenAdvantage: { type: Type.STRING },
        mainStatusSymbol: { type: Type.STRING },
        finalCollapseType: { type: Type.STRING },
        mainProofSystem: { type: Type.STRING }
      }
    },
    coreEmotionalEngine: {
      type: Type.OBJECT,
      properties: {
        initialInjustice: { type: Type.STRING },
        wrongChoice: { type: Type.STRING },
        heroSilentAdvantage: { type: Type.STRING },
        midpointPublicProof: { type: Type.STRING },
        finalTrap: { type: Type.STRING },
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
      items: { type: Type.STRING }
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
        location: { type: Type.STRING },
        publicWitnessGroup: { type: Type.STRING },
        humiliationMethod: { type: Type.STRING },
        whatMustNotBeRepeated: { type: Type.STRING },
        status: { type: Type.STRING }
      }
    },
    mainTropeSelection: {
      type: Type.OBJECT,
      properties: {
        trope: { type: Type.STRING },
        fitsIdea: { type: Type.STRING }
      }
    },
    secondaryTropeSelection: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    emotionalTropeLayer: {
      type: Type.STRING
    },
    powerSystemTrope: {
      type: Type.STRING
    },
    betrayerTrope: {
      type: Type.STRING
    },
    proofRevealTrope: {
      type: Type.STRING
    },
    antiClicheTwist: {
      type: Type.OBJECT,
      properties: {
        twist: { type: Type.STRING }
      }
    },
    tropeMixMatrix: {
      type: Type.OBJECT,
      properties: {
        powerSystemTrope: { type: Type.STRING },
        emotionalTrope: { type: Type.STRING },
        explanation: { type: Type.STRING }
      }
    },
    whatThisStoryMustNotBecome: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
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
        keyOriginalityRule: { type: Type.STRING }
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
        lockedStoryDNA: { type: Type.STRING },
        mainTrope: { type: Type.STRING },
        antiClicheTwist: { type: Type.STRING }
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
        whatHeUnderstands: { type: Type.STRING }
      }
    },
    antagonistFunctionLock: {
      type: Type.OBJECT,
      properties: {
        publicMask: { type: Type.STRING },
        realWeakness: { type: Type.STRING },
        falseBelief: { type: Type.STRING },
        sourceOfTemporaryPower: { type: Type.STRING }
      }
    },
    betrayerFunctionLock: {
      type: Type.OBJECT,
      properties: {
        publicRole: { type: Type.STRING },
        privateDesire: { type: Type.STRING },
        whyTheyChooseWrong: { type: Type.STRING }
      }
    },
    trueAllyFunctionLock: {
      type: Type.OBJECT,
      properties: {
        publicRole: { type: Type.STRING },
        whyTheyMatter: { type: Type.STRING }
      }
    },
    supportingForceLock: {
      type: Type.OBJECT,
      properties: {
        whatGivesAntagonistPower: { type: Type.STRING },
        whyItSupportsWrongPerson: { type: Type.STRING }
      }
    },
    coreEmotionalChain: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    humiliationLadder: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    protagonistControlLadder: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    betrayerRegretLadder: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    antagonistEscalationLadder: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    trueAllyRecognitionLadder: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    publicPayoffLadder: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    hiddenCardRevealSchedule: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    proofSystemLock: {
      type: Type.STRING
    },
    costAndConsequenceLadder: {
      type: Type.STRING
    },
    faceSlapVariationMap: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    pacingRhythmMapFor9Parts: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    antiRepetitionCheck: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    foundationFinalDecision: {
      type: Type.OBJECT,
      properties: {
        decision: { type: Type.STRING },
        explanation: { type: Type.STRING }
      }
    },
    handoffPackageToStage02: {
      type: Type.STRING
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
    complete9PartMacroOutline: {
      type: Type.OBJECT,
      properties: {
        overallStrategy: { type: Type.STRING },
        partSummaries: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              partNumber: { type: Type.STRING },
              partTitle: { type: Type.STRING },
              mainDramaticFunction: { type: Type.STRING },
              emotionalRole: { type: Type.STRING },
              primaryDopaminePayoff: { type: Type.STRING },
              endingHook: { type: Type.STRING },
              summary: { type: Type.STRING }
            }
          }
        }
      }
    },
    ancillaryMaps: {
      type: Type.OBJECT,
      properties: {
        publicPayoffMap: { type: Type.ARRAY, items: { type: Type.STRING } },
        regretMovementMap: { type: Type.ARRAY, items: { type: Type.STRING } },
        antagonistEscalationMap: { type: Type.ARRAY, items: { type: Type.STRING } },
        protagonistControlMap: { type: Type.ARRAY, items: { type: Type.STRING } },
        hiddenCardMap: { type: Type.ARRAY, items: { type: Type.STRING } }
      }
    },
    macroOutlineFinalDecision: {
      type: Type.OBJECT,
      properties: {
        decision: { type: Type.STRING },
        explanation: { type: Type.STRING }
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
    completeSceneCardsByPart: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          partNumber: { type: Type.STRING },
          partTitle: { type: Type.STRING },
          partFunction: { type: Type.STRING },
          scenes: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                sceneIdentifier: { type: Type.STRING },
                sceneTitle: { type: Type.STRING },
                sceneSurface: { type: Type.STRING },
                whatHappens: { type: Type.STRING },
                dialogueFunction: { type: Type.STRING },
                exitHook: { type: Type.STRING }
              }
            }
          }
        }
      }
    },
    overallFeedback: {
      type: Type.STRING
    },
    sceneCardsFinalDecision: {
      type: Type.OBJECT,
      properties: {
        decision: { type: Type.STRING },
        explanation: { type: Type.STRING }
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
