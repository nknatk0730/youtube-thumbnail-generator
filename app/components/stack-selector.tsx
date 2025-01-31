import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image";

export function StackSelector() {
  const icons = [
    {
      id: 'nextjs',
      name: 'Next.js',
    },
    {
      id: 'tailwindcss',
      name: 'Tailwind CSS'
    },
    {
      id: 'html5',
      name: 'HTML 5'
    },
    {
      id: 'css',
      name: 'CSS'
    },
  ];

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select icon" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {icons.map((icon) => (
            <SelectItem key={icon.id} value={icon.id}>
              <span className="flex gap-2 items-center">
                <Image src={`/youtube-thumbnail-generator/${icon.id}.svg`} alt="" width={20} height={20} />
                {icon.name}
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
