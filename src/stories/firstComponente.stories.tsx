import type { Meta, StoryObj } from "@storybook/react-vite";
import { FirstComponent } from "./FirstComponent";
import FirstComponentSource from "./FirstComponent.tsx?raw";



const meta = {
    title: "Example/firstComponent",
    component: FirstComponent,  
    parameters: {
        docs: {
            source: {
                code: FirstComponentSource,
                language: "tsx",
                type: "code"
            }
        }
    }
} satisfies Meta<typeof FirstComponent>;

export default meta;
type Story = StoryObj<typeof meta>;


export const FirstComponentExample: Story = {
    args: {
        nombre: "Emiliano",
    }
}