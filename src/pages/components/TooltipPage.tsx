import { Tooltip } from "@/components/Tooltip";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const usageCode = `import { Tooltip } from "@/components";

<Tooltip content="Helpful information" position="top">
  <button type="button">Hover or focus me</button>
</Tooltip>`;

  const positionsCode = `import { Tooltip } from "@/components";

<Tooltip content="Appears above" position="top"><button>Top</button></Tooltip>
<Tooltip content="Appears below" position="bottom"><button>Bottom</button></Tooltip>
<Tooltip content="Appears to the left" position="left"><button>Left</button></Tooltip>
<Tooltip content="Appears to the right" position="right"><button>Right</button></Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "React.ReactNode",
      default: "-",
      description: "The content displayed inside the tooltip.",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Where the tooltip appears relative to its trigger.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description: "The element that triggers the tooltip on hover or focus.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional classes applied to the trigger wrapper.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-lg text-gray-600">
          Displays a short description when an element is hovered or focused.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <Tooltip content="Helpful information">
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Hover or focus me
            </button>
          </Tooltip>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Positions</h2>
        <ComponentDemo code={positionsCode}>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {(["top", "bottom", "left", "right"] as const).map((position) => (
              <Tooltip
                key={position}
                content={`Tooltip on the ${position}`}
                position={position}
              >
                <button
                  type="button"
                  className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  {position[0].toUpperCase() + position.slice(1)}
                </button>
              </Tooltip>
            ))}
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
