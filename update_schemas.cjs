const fs = require('fs');
let code = fs.readFileSync('server/schemas.ts', 'utf8');

const newSchema = `
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
`;

const afterFoundation = code.substring(code.indexOf('export const foundationSchema01_03_04 = '));

let finalCode = `import { Type } from '@google/genai';\n\n${newSchema}\n\n${afterFoundation}`;
fs.writeFileSync('server/schemas.ts', finalCode);

