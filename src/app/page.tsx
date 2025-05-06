import { ModeToggle } from "@/components/ModeToggle";
import { DialogDemo } from "@/components/DialogDemo";
import { DrawerDemo } from "@/components/DrawerDemo";
import { DataTableDemo } from "@/components/DataTableDemo";

export default function Home() {
  return (
    <div className="w-2/3 h-screen mx-auto px-8">
      <ModeToggle />
      <div className="flex items-center justify-center pt-8">
        <div className="text-center">
          <DialogDemo />
          <DrawerDemo />
          <DataTableDemo />
        </div>
      </div>
    </div>
  );
}
