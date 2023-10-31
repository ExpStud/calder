import { FC } from "react";

interface Props {
  description: string | undefined;
}
const GalleryItemLore: FC<Props> = (props: Props) => {
  const { description } = props;

  return (
    <div className="col-start bg-lore-bg bg-cover bg-no-repeat px-5 py-2 h-[400px]">
      <h4 className="text-light-red pt-2 md:pt-0">LORE</h4>
      <p className="text-custom-white text-base py-3 md:py-1 md:pr-32 lg:pr-36">
        {description ?? ""}
      </p>
    </div>
  );
};

export default GalleryItemLore;
