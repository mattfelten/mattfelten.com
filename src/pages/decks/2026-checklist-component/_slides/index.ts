// The whole 45 minutes, in four segments.
//
// File numbers are deck positions, and the gaps are the TOC
// interstitials: 2, 3, 7, 15 and 45 have no file because TocSlide is
// rendered inline in index.astro. So a missing number here means an
// interstitial, never a missing slide, and slide 36 in the outline is
// 36-AccessibilityAudit.astro with nothing to work out.
//
// The Anvil slides carry an explicit title. Every other slide in this
// deck either passes its own or hides the header, and the deck-level
// fallback is still "Checklist", which is what the 29 Checklist slides
// rely on. Adding the title to the Anvil ones was cheaper and less
// disruptive than retitling a segment that has already been reviewed
// slide by slide.

// About Me
export { default as Title } from './1-Title.astro';
export { default as WhoIAm } from './4-WhoIAm.astro';
export { default as WorkHistory } from './5-WorkHistory.astro';
export { default as DesignPrinciples } from './6-DesignPrinciples.astro';

// Anvil Design System
export { default as AnvilOverview } from './8-AnvilOverview.astro';
export { default as AnvilCodeArchitecture } from './9-AnvilCodeArchitecture.astro';
export { default as AnvilFigmaLibraries } from './10-AnvilFigmaLibraries.astro';
export { default as AnvilAdoption } from './11-AnvilAdoption.astro';
export { default as AnvilReleaseAnnouncements } from './12-AnvilReleaseAnnouncements.astro';
export { default as AnvilAccessibility } from './13-AnvilAccessibility.astro';
export { default as AnvilGridAndLayout } from './14-AnvilGridAndLayout.astro';

// Checklist
export { default as Before } from './16-Before.astro';
export { default as WhyAComponent } from './17-WhyAComponent.astro';
export { default as WhereWeLanded } from './18-WhereWeLanded.astro';
export { default as EditingSection } from './19-EditingSection.astro';
export { default as EditingFinal } from './20-EditingFinal.astro';
export { default as RuledOutEditorOpens } from './21-RuledOutEditorOpens.astro';
export { default as RuledOutHairline } from './22-RuledOutHairline.astro';
export { default as ReorderingSection } from './23-ReorderingSection.astro';
export { default as ReorderingFinal } from './24-ReorderingFinal.astro';
export { default as RuledOutShift } from './25-RuledOutShift.astro';
export { default as RuledOutFullProxy } from './26-RuledOutFullProxy.astro';
export { default as NestedSection } from './27-NestedSection.astro';
export { default as NestedFinal } from './28-NestedFinal.astro';
export { default as RuledOutDeepNesting } from './29-RuledOutDeepNesting.astro';
export { default as RuledOutCascade } from './30-RuledOutCascade.astro';
export { default as MultiplayerSection } from './31-MultiplayerSection.astro';
export { default as MultiplayerFinal } from './32-MultiplayerFinal.astro';
export { default as RuledOutLock } from './33-RuledOutLock.astro';
export { default as RuledOutHighlight } from './34-RuledOutHighlight.astro';
export { default as AccessibilitySection } from './35-AccessibilitySection.astro';
export { default as AccessibilityAudit } from './36-AccessibilityAudit.astro';
export { default as AccessibleImplementation } from './37-AccessibleImplementation.astro';
export { default as ComponentSection } from './38-ComponentSection.astro';
export { default as ComponentStructure } from './39-ComponentStructure.astro';
export { default as ComponentAPI } from './40-ComponentAPI.astro';
export { default as ObjectTypes } from './41-ObjectTypes.astro';
export { default as Implementation } from './42-Implementation.astro';
export { default as Docs } from './43-Docs.astro';
export { default as NextSteps } from './44-NextSteps.astro';

// Closing
export { default as WhyMe } from './46-WhyMe.astro';
export { default as Testimonials } from './47-Testimonials.astro';
export { default as ThankYou } from './48-ThankYou.astro';
