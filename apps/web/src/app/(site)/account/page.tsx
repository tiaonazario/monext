import { PageTitle } from '@/components/page-title'

export default function AccountPage() {
  return (
    <div className="flex flex-col gap-2">
      <PageTitle
        title="Account"
        description="Manage your account and personalize your experience here!"
        className="p-4"
      />
    </div>
  )
}
