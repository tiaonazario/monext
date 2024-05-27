import { PageTitle } from '@/components/page-title'

export default function ExplorePage() {
  return (
    <div className="flex flex-col gap-2">
      <PageTitle
        title="Explore"
        description="Explore the latest updates and discover new content on our site!"
        className="p-4"
      />
    </div>
  )
}
