const fs = require('fs');
let code = fs.readFileSync('server/schemas.ts', 'utf8');

const newSchema = `
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
`;

if (!code.includes('export const sceneCardsSchema')) {
  // insert after macroOutlineSchema or sceneSchema
  const target = 'export const sceneSchema';
  const parts = code.split(target);
  const finalCode = parts[0] + newSchema + '\n' + target + parts[1];
  fs.writeFileSync('server/schemas.ts', finalCode);
}
