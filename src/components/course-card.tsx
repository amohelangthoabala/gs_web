import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";


interface CourseCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  label: string;
}

export function CourseCard({ img, tag, title, desc, label }: CourseCardProps) {
  return (
    <Card placeholder={undefined} className="border">
      <CardHeader placeholder={undefined} className="h-64">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover scale-[1.1]"
        />
      </CardHeader>
      <CardBody placeholder={undefined}>
        <div className="flex items-center gap-2">
          <Typography
            placeholder={undefined}
            variant="small"
            color="blue"
            className="mb-2 font-normal text-gray-500"
          >
            {tag}
          </Typography>
        </div>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <Typography placeholder={undefined} variant="h5" className="mb-2 normal-case">
            {title}
          </Typography>
        </a>
        <Typography placeholder={undefined} className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Button placeholder={undefined} variant="outlined">{label}</Button>
      </CardBody>
    </Card>
  );
}

export default CourseCard;