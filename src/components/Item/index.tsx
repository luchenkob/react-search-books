import { FC, HTMLAttributes } from "react";
import { BookProps } from "../../types";

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  data: BookProps;
}

const Item: FC<ItemProps> = ({
  isActive,
  data: { title, author_name, first_publish_year, isbn, number_of_pages_median  },
  ...rest
}) => {
  return (
    <div
      {...rest}
      className="relative w-full p-2 border-solid border-b border-grey-200 flex justify-between"
    >
      <div>
        <h3 className="font-semibold">{title} {number_of_pages_median && `(${number_of_pages_median})`}</h3>
        {author_name && (
          <div>
            <span className="text-sm">
              Authors: {author_name.map((author) => author).join(", ")}
            </span>
          </div>
        )}
        {first_publish_year && (
          <div>
            <span className="text-sm">Publish Year: {first_publish_year}</span>
          </div>
        )}
      </div>
      <div>
        {isbn?.length && (
          <div>
            <span className="text-xs">ISBN: {isbn[0]}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
