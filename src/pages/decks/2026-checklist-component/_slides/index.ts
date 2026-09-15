// The whole 45 minutes, in four segments.
//
// File numbers are deck positions, and the gaps are the TOC
// interstitials: 2, 3, 7, 19 and 36 have no file because TocSlide is
// rendered inline in index.astro. So a missing number here means an
// interstitial, never a missing slide, and slide 29 in the outline is
// 29-AccessibilityAudit.astro with nothing to work out.
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
export { default as MultiplayerFinal } from './23-MultiplayerFinal.astro';
export { default as RuledOutShift } from './24-RuledOutShift.astro';
export { default as RuledOutLock } from './25-RuledOutLock.astro';
export { default as RuledOutEditorOpens } from './26-RuledOutEditorOpens.astro';
export { default as Explorations } from './27-Explorations.astro';
export { default as AccessibilitySection } from './28-AccessibilitySection.astro';
export { default as AccessibilityAudit } from './29-AccessibilityAudit.astro';
export { default as ComponentSection } from './30-ComponentSection.astro';
export { default as ComponentStructure } from './31-ComponentStructure.astro';
export { default as ComponentAPI } from './32-ComponentAPI.astro';
export { default as Implementation } from './33-Implementation.astro';
export { default as Docs } from './34-Docs.astro';
export { default as NextSteps } from './35-NextSteps.astro';

// Closing
export { default as WhyMe } from './37-WhyMe.astro';
export { default as ThankYou } from './38-ThankYou.astro';
