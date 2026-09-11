import { Button } from './components/Button';

export default function App() {
  return (
    <div className="min-h-screen bg-cream flex justify-center p-4">
      <main className="w-full max-w-[375px] bg-white rounded-xl shadow-md p-6 space-y-6 self-start">
        <header className="border-b pb-4">
          <h1 className="text-xl font-bold text-navy">Component Preview</h1>
          <p className="text-xs text-teal font-medium">375px Viewport · Button Component</p>
        </header>

        <section className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase text-navy block mb-1">Primary State</label>
            <Button variant="primary" onClick={() => alert("Primary Clicked!")}>
              Primary Button
            </Button>
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-navy block mb-1">Secondary State</label>
            <Button variant="secondary">
              Secondary Button
            </Button>
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-navy block mb-1">Destructive State</label>
            <Button variant="destructive">
              Delete Item
            </Button>
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-navy block mb-1">Disabled State</label>
            <Button disabled>
              Disabled Action
            </Button>
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-navy block mb-1">Loading State</label>
            <Button isLoading>
              Submit Form
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}