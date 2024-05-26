import { Button } from '@monext/ui'

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-bold text-lg">Welcome to MoNext</h1>

      <div className="flex flex-col gap-2 rounded-lg border p-6">
        <h2 className="font-semibold text-base underline">Button</h2>
        <div className="flex items-center gap-4">
          <Button>Default</Button>
          <Button variant="primary" size="base">
            Primary
          </Button>
          <Button variant="secondary" size="sm">
            Secondary
          </Button>
          <Button variant="outline" size="md">
            Outline
          </Button>
        </div>
      </div>
    </div>
  )
}
