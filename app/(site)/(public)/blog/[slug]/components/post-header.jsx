import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { es } from 'date-fns/esm/locale';
import Image from 'next/image';

export default function PostHeader({ post }) {
  const { tags } = post;

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-3xl font-semibold text-primary'>{post.title}</h1>
      <div className='relative w-full'>
        <Image
          src={`/images/empty.png`}
          alt={`${post.title}`}
          width={800}
          height={400}
          className='h-[34vw] w-full rounded-xl border border-white object-contain'
        />
        {/* TAGS */}
        {tags && tags.length > 0 && (
          <div className='absolute bottom-2 right-2 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <Badge key={tag} variant='default'>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-xs'>
            {format(new Date(post.date), 'PP', { locale: es })}
          </p>
        </div>
      </div>
    </div>
  );
}
