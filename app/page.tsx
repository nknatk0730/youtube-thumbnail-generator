'use client';

import ImageDropzone from '@/app/components/image-dropzone';
import ImageGroup from '@/app/components/image-group';
import ToolBar from '@/app/components/toolbar';
import { cn } from '@/lib/utils';
import { Radio } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <ImageDropzone>
      <div className="flex items-center justify-center flex-col min-h-[100dvh] bg-canvas-background">
        <div
          id="canvas"
          className={cn(
            'relative w-[800px] border aspect-video px-6 pt-6 gap-20 bg-white'
          )}
        >
          <div className='flex items-center gap-3'>
            <div className='px-2 bg-black text-white py-1 rounded-md'>PART 1</div>
            <Image src='/youtube-thumbnail-generator/nextjs.svg' alt='' width={32} height={32} />
            <span className='flex-1'></span>
            <div className='px-2 flex items-center gap-2 bg-red-500 text-white py-1 rounded-md'>
              LIVE
              <Radio size={18}/>
            </div>
          </div>
          <ImageGroup />
        </div>

        <ToolBar />
      </div>
    </ImageDropzone>
  );
}
