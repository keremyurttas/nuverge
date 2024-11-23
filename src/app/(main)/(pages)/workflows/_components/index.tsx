import Workflow from "./workflow";

export default function Workflows() {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col gap-4 p-6">
        <Workflow
          description="a test one"
          id="asdsadsa232"
          name="Automation"
          publish={false}
        />
        <Workflow
          description="a test one"
          id="asdsadsa232"
          name="Automation"
          publish={false}
        />
      </section>
    </div>
  );
}
