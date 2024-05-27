import { PageTitle } from '@/components/page-title'

export default function FeedPage() {
  return (
    <div className="flex flex-col gap-2">
      <PageTitle
        title="Feed"
        description="Stay updated with the latest news and updates on our site!"
        className="p-4"
      />

      <div className="h-20 w-20 bg-primary hover:bg-primary/40">Pronto</div>
    </div>
  )
}
