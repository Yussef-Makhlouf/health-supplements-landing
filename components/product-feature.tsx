import { ShieldCheck, Smile, Award, Leaf, ThumbsUp, SmileIcon as Tooth } from "lucide-react"

interface ProductFeatureProps {
  icon: "shield" | "smile" | "award" | "leaf" | "thumbs-up" | "tooth"
  title: string
  description: string
  highlight?: string
}

export default function ProductFeature({ icon, title, description, highlight }: ProductFeatureProps) {
  const iconMap = {
    shield: ShieldCheck,
    smile: Smile,
    award: Award,
    leaf: Leaf,
    "thumbs-up": ThumbsUp,
    tooth: Tooth,
  }

  const IconComponent = iconMap[icon]

  return (
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-blue-100 flex items-center justify-center mb-6">
        <IconComponent className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      {highlight && (
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {highlight}
          </span>
        </div>
      )}
    </div>
  )
}
