import {
  Dispatch,
  SetStateAction,
  FC,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { Modal } from "@components";
import { rulebreakers, ViewContext } from "@constants";

interface Props {
  imageId: number;
  setImageId: Dispatch<SetStateAction<number>>;
}

const ImageModal: FC<Props> = (props: Props) => {
  const { imageId, setImageId } = props;

  const [selected, setSelected] = useState<number>(0);
  const [src, setSrc] = useState<string>();

  const formatImageSrc = (id: number): string => `${id < 10 ? "00" : "0"}${id}`;

  const folder = formatImageSrc(imageId);
  const mainImage = `/images/rulebreakers/${folder}.png`;
  const brkr = rulebreakers[imageId];

  const { ImageModalId } = useContext(ViewContext);

  const getImage = useCallback((): string => {
    const image = formatImageSrc(selected);
    let src = "";
    switch (selected) {
      case 0:
        src = `/images/rulebreakers/${folder}.png`;
        break;
      default:
        src = `/images/rulebreakers/${folder}/${image}.png`;
        break;
    }
    return src;
  }, [folder, selected]);

  useEffect(() => {
    const image = getImage();
    setSrc(image);
  }, [getImage, selected]);

  return (
    <Modal
      show={ImageModalId !== -1}
      onClick={() => {
        setImageId(-1);
      }}
    >
      <div className=""></div>
    </Modal>
  );
};

export default ImageModal;
