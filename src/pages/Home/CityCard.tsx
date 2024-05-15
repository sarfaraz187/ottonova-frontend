import { CityCardProps } from '@/models/Common';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const CityCard = ({ city, onClick }: CityCardProps) => {
  return (
    <Card className="cursor-pointer" onClick={onClick} key={city.latitude}>
      <CardHeader className="flex items-center py-4 pb-0">
        <CardTitle>{city.country}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <img src={city.thumbnails?.[0]} className="rounded-lg" />
      </CardContent>
      <div className="p-4 pt-0">
        <CardContent className="flex p-0">
          <span className="font-bold">Founded :&nbsp;</span>
          <span>{city.founded}</span>
        </CardContent>
        <CardContent className="flex p-0">
          <span className="font-bold">Capital :&nbsp;</span>
          <span> {city.name}</span>
        </CardContent>
      </div>
    </Card>
  );
};
