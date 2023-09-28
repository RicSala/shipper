import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post: { title, date, slug, tags } }) => {
  return (
    <>
      <article className='relative overflow-hidden rounded-lg shadow transition hover:shadow-lg md:min-w-[300px]'>
        <Link href={`/blog/${slug}`}>
          <Image
            alt='Office'
            src={`/images/slug.jpg`}
            width={400}
            height={400}
            className='h-56 w-full object-cover'
          />
          <div className='bg-white p-4 sm:p-6'>
            <time dateTime='2022-10-10' className='block text-xs text-gray-500'>
              {date}
            </time>

            <h3 className='mt-0.5 text-lg text-gray-900'>{title}</h3>

            <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
            {tags && tags.length > 0 && (
              <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    tag={tag}
                    className='bg-secondary font-normal text-secondary-content hover:bg-secondary/70 hover:text-secondary-content/70'
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </Link>
      </article>

      <>
        {/* 

        <Link href={`/blog/${slug}`}>
            <div className="
            border border-gray-200 dark:border-gray-800
            relative
            max-w-[18rem]
            p-4 rounded-md
            hover:shadow-md
            cursor-pointer
            transition
            duration-200
            ease-in-out
            flex
            flex-col
            gap-3
            overflow-hidden
            isolate
            ">



                <h3>{title}</h3>
                {
                    <p>
                        {format(new Date(date), 'dd/MM/yyyy')}
                    </p>
                }
                {
                    tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {
                                tags.map((tag) => (
                                    <Badge key={tag} tag={tag}>
                                        {tag}
                                    </Badge>
                                ))
                            }
                        </div>
                    )
                }
                <Image src={`/images/slug.jpg`}
                    fill
                    alt=""
                    className="object-cover -z-10 opacity-70 "
                />
            </div>


        </Link> */}
      </>
    </>
  );
};
export default PostCard;
