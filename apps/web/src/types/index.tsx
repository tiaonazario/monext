import { z } from 'zod'

const sidebarStates = ['closed', 'collapsed', 'open'] as const
export const sidebarStateSchema = z.enum(sidebarStates).nullable()
export type SidebarState = z.infer<typeof sidebarStateSchema>
