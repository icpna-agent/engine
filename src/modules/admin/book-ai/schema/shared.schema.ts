import { z } from "zod";

export const bookSkillZodEnum = z.enum([
  "grammar",
  "vocabulary",
  "reading",
  "listening",
  "reading_listening",
  "pronunciation",
  "speaking",
  "writing",
  "functional_language",
  "writing_bank",
  "speaking_task",
  "review",
  "bring_it_together",
  "grammar_reference",
  "communication_bank",
  "selected_transcripts",
  "workbook",
]);
