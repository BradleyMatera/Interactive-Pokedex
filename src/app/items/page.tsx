"use client";

import { Button, Card, CardBody, Divider } from "@nextui-org/react";
import NextLink from "next/link";
import { useMemo } from "react";
import { ItemList } from "@/components/ItemList";
import { useItems } from "@/contexts/ItemContext";

export default function ItemsPage() {
  const { items, loading, error } = useItems();

  const aggregate = useMemo(() => {
    const categories = new Set<string>();
    const attributes = new Set<string>();
    items.forEach((item) => {
      if (item.category) {
        categories.add(item.category);
      }
      item.attributes.forEach((attribute) => attributes.add(attribute));
    });
    return {
      categories: categories.size,
      attributes: attributes.size,
    };
  }, [items]);

  return (
    <main className="container mx-auto px-4 sm:px-6 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-default-200 bg-white/80 px-6 py-10 text-center shadow-lg dark:bg-black/60 sm:px-10 md:py-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 md:gap-5">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">Item Dex</h1>
          <p className="text-base text-default-600 md:text-lg">
            Track every Poké Ball, held item, and curious trinket. Learn what each item does, how it is used, and which Pokémon can benefit from it.
          </p>
          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              as={NextLink}
              href="/"
              variant="flat"
              color="primary"
              className="min-h-12 w-full font-medium sm:w-auto"
              radius="full"
            >
              Back to Pokédex
            </Button>
            <Button
              as={NextLink}
              href="/types"
              color="secondary"
              variant="shadow"
              className="min-h-12 w-full font-medium sm:w-auto"
              radius="full"
            >
              Browse Types
            </Button>
          </div>
        </div>
      </section>

      <Divider className="my-4" />

      <section className="py-4">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <CardBody className="py-4 text-center">
              <p className="text-3xl font-bold text-primary">{items.length}</p>
              <p className="text-default-600">Items Catalogued</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="py-4 text-center">
              <p className="text-3xl font-bold text-secondary">{aggregate.categories}</p>
              <p className="text-default-600">Categories</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="py-4 text-center">
              <p className="text-3xl font-bold text-success">{aggregate.attributes}</p>
              <p className="text-default-600">Unique Attributes</p>
            </CardBody>
          </Card>
        </div>
      </section>

      <Divider className="my-4" />

      <section aria-label="Item Collection" className="py-4">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold">Item Collection</h2>
          <p className="text-default-600">{items.length} items indexed</p>
        </div>
        <ItemList items={items} loading={loading} error={error} />
      </section>
    </main>
  );
}
