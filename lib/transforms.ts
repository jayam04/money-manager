import { getCategoriesNoSync } from "./app/db";

export function getCategoryDisplay(category: Category): string {
    if (!category.parentID) return category.baseName;
    
    let categories = getCategoriesNoSync();
    return `${getCategoryDisplay(categories[category.parentID])} / ${category.baseName}`
}
