import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ResultsSkeleton = ({ count = 8 }) => (
  <div className="w-full flex flex-col items-center gap-4 py-10">
    <div className="w-full flex flex-wrap justify-center gap-5 pt-5">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} height={220} width={240} style={{ borderRadius: 16 }} />
      ))}
    </div>
  </div>
)

export default ResultsSkeleton
