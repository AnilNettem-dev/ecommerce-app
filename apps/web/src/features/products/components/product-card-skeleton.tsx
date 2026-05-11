import { Skeleton } from '@/shared/ui/skeleton';

export function ProductCardSkeleton() {
  return (
    <div className="border rounded-xl p-4 flex flex-col gap-3">
      <Skeleton className="h-[220px] w-full rounded-lg" />

      <div className="space-y-2">
        <Skeleton className="h-5 w-3/4" />

        <Skeleton className="h-4 w-full" />
      </div>

      <Skeleton className="h-5 w-24" />
    </div>
  );
}