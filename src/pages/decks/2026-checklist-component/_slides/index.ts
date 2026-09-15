// The whole 45 minutes, in four segments.
//
// File numbers are deck positions, and the gaps are the TOC
// interstitials: 2, 3, 7, 19 and 48 have no file because TocSlide is
// rendered inline in index.astro. So a missing number here means an
// interstitial, never a missing slide, and slide 40 in the outline is
// 40-AccessibilityAudit.astro with nothing to work out.
//
// The Anvil slides carry an explicit title. Every other slide in this
// deck either passes its own or hides the header, so the deck-level
// fallback reaches only the Checklist content slides, which makes it the
// SEGMENT name rather than the deck name. Renaming that segment is one
// string in index.astro, not an edit to every file in here.

// About Me
export { default as Title } from './1-Title.astro';
export { default as WhoIAm } from './4-WhoIAm.astro';
export { default as WorkHistory } from './5-WorkHistory.astro';
export { default as DesignPrinciples } from './6-DesignPrinciples.astro';

// Anvil Design System
export { default as AnvilWhatIsServiceTitan } from './8-AnvilWhatIsServiceTitan.astro';
export { default as AnvilOverview } from './9-AnvilOverview.astro';
export { default as AnvilPriorArt } from './10-AnvilPriorArt.astro';
export { default as AnvilKeyDecisions } from './11-AnvilKeyDecisions.astro';
export { default as AnvilCodeArchitecture } from './12-AnvilCodeArchitecture.astro';
export { default as AnvilFigmaLibraries } from './13-AnvilFigmaLibraries.astro';
export { default as AnvilAccessibility } from './14-AnvilAccessibility.astro';
export { default as AnvilDocumentation } from './15-AnvilDocumentation.astro';
export { default as AnvilAdoption } from './16-AnvilAdoption.astro';
export { default as AnvilFourLayers } from './17-AnvilFourLayers.astro';
export { default as AnvilWhatIdDoDifferently } from './18-AnvilWhatIdDoDifferently.astro';

// Checklist
export { default as Before } from './20-Before.astro';
export { default as WhyAComponent } from './21-WhyAComponent.astro';
export { default as WhereWeLanded } from './22-WhereWeLanded.astro';
export { default as EditingSection } from './23-EditingSection.astro';
export { default as EditingFinal } from './24-EditingFinal.astro';
export { default as RuledOutEditorOpens } from './25-RuledOutEditorOpens.astro';
export { default as RuledOutHairline } from './26-RuledOutHairline.astro';
export { default as ReorderingSection } from './27-ReorderingSection.astro';
export { default as ReorderingFinal } from './28-ReorderingFinal.astro';
export { default as RuledOutShift } from './29-RuledOutShift.astro';
export { default as RuledOutFullProxy } from './30-RuledOutFullProxy.astro';
export { default as NestedSection } from './31-NestedSection.astro';
export { default as NestedFinal } from './32-NestedFinal.astro';
export { default as RuledOutDeepNesting } from './33-RuledOutDeepNesting.astro';
export { default as RuledOutCascade } from './34-RuledOutCascade.astro';
export { default as MultiplayerSection } from './35-MultiplayerSection.astro';
export { default as MultiplayerFinal } from './36-MultiplayerFinal.astro';
export { default as RuledOutLock } from './37-RuledOutLock.astro';
export { default as RuledOutHighlight } from './38-RuledOutHighlight.astro';
export { default as AccessibilitySection } from './39-AccessibilitySection.astro';
export { default as AccessibilityAudit } from './40-AccessibilityAudit.astro';
export { default as ComponentSection } from './41-ComponentSection.astro';
export { default as ComponentStructure } from './42-ComponentStructure.astro';
export { default as ComponentAPI } from './43-ComponentAPI.astro';
export { default as ObjectTypes } from './44-ObjectTypes.astro';
export { default as Implementation } from './45-Implementation.astro';
export { default as Docs } from './46-Docs.astro';
export { default as NextSteps } from './47-NextSteps.astro';

// Closing
export { default as WhyMe } from './49-WhyMe.astro';
export { default as ThankYou } from './50-ThankYou.astro';
