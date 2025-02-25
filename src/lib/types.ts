import { z } from "zod";

export const EditUserProfileSchema = z.object({
  email: z.string().email("Required"),
  name: z.string().min(1, "Required"),
});

export const WorkflowformSchema = z.object({
  name: z.string().min(1, "Required"),
  description: z.string().min(1, "Required"),
});
export type ConnectionTypes = 'Google Drive' | 'Notion' | 'Slack' | 'Discord'

export type Connection = {
  title: ConnectionTypes
  description: string
  image: string
  connectionKey: any
  accessTokenKey?: string
  alwaysTrue?: boolean
  slackSpecial?: boolean
}