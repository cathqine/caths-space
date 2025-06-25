interface PhotoCardProps {
  leftval: number,
  rightval: number,
}

export default function PhotoCard({ leftval, rightval }: PhotoCardProps) {
  return (
    <div className={`h-80 w-80 border-1 rounded-2xl ml-${leftval} mr-${rightval}`}>

    </div>
  );
}