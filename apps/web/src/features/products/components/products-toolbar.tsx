'use client';

type Props = {
  search: string;
  category: string;
  sort: string;
  onSearchChange: (
    value: string
  ) => void;
  onCategoryChange: (
    value: string
  ) => void;
  onSortChange: (
    value: string
  ) => void;
};

export function ProductsToolbar({
    search,
    category,
    sort,
    onCategoryChange,
    onSortChange,
    onSearchChange,
}: Props) {
  return (
    <div className="flex gap-4 mb-6">
        <input
            value={search}
            onChange={(e) =>
            onSearchChange(e.target.value)
            }
            placeholder="Search products..."
            className="border p-3 rounded-lg flex-1"
        />

        <select
            value={category}
            onChange={(e) =>
            onCategoryChange(
                e.target.value
            )
            }
            className="border p-3 rounded-lg"
        >
            <option value="">
            All Categories
            </option>

            <option value="Phones">
            Phones
            </option>

            <option value="Laptops">
            Laptops
            </option>

            <option value="Accessories">
            Accessories
            </option>
        </select>

        <select
            value={sort}
            onChange={(e) =>
            onSortChange(e.target.value)
            }
            className="border p-3 rounded-lg"
        >
            <option value="">
            Sort
            </option>

            <option value="price_asc">
            Price: Low to High
            </option>

            <option value="price_desc">
            Price: High to Low
            </option>
        </select>
    </div>
  );
}