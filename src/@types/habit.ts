export interface habitProps {
  title: string
  infos: {
    habitSlug: string
    streak: Record<string, boolean>
  }
}
