import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWishlist } from "@/lib/hooks/useWishlist";
import { DotsVerticalIcon, TrashIcon } from "@radix-ui/react-icons";

export default function ActionDropdown({ id }: { id: number }) {
  const { removeWishList } = useWishlist();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="action-button" variant="link">
          <DotsVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Action</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            onClick={() => removeWishList(id)}
            size="sm"
            className="flex items-center gap-2"
          >
            <div>Remove</div>
            <TrashIcon />
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
