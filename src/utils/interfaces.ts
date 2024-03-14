interface Amenity {
    id: number;
    attributes: {
        icon: string;
        amenity: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

interface BuyingReason {
    id: number;
    attributes: {
        reason: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

interface KitchenPlan {
    id: number;
    attributes: {
        plan: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

interface ProjectStatus {
    id: number;
    attributes: {
        projectStatus: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

interface Currency {
    id: number;
    attributes: {
        currency: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

interface Brochure {
    id: number;
    attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number | null;
        height: number | null;
        formats: any | null; // You might want to define a proper interface for formats
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: any | null; // You might want to define a proper interface for provider_metadata
        createdAt: string;
        updatedAt: string;
    };
}

interface PropertyType {
    id: number;
    attributes: {
        type: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

export interface Image {
    id: number;
    attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: any; // You might want to define a proper interface for formats
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: any | null; // You might want to define a proper interface for provider_metadata
        createdAt: string;
        updatedAt: string;
    };
}

interface SizeUnit {
    id: number;
    attributes: {
        unit: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

export interface Property {
    id: number;
    attributes: {
        propertyName: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        summary: string;
        buyingPrice: number;
        sellingPrice: number;
        rentalIncomeFurnished: number;
        rentalIncomeUnfurnished: number;
        unitsAvailable: number;
        soldout: boolean;
        videoUrl: string | null;
        description: string;
        no_of_bedrooms: number;
        no_of_bathrooms: number;
        no_of_DSQ:number;
        no_of_units: number;
        no_of_floors: number;
        completionYear: number;
        expected_completion_date: Date;
        size: number;
        location: string;
        proximity: string;
        locationPin: string;
        paymentPlan: string;
        kitchenPlan: {
            data: KitchenPlan;
        };
        currency: {
            data: Currency;
        };
        buyingReasons: {
            data: BuyingReason[];
        };
        images: {
            data: Image[];
        };
        amenities: {
            data: Amenity[];
        };
        brochure: {
            data: Brochure | null;
        };
        size_unit: {
            data: SizeUnit;
        };
        projectStatus: {
            data: ProjectStatus;
        };
        propertyType: {
            data: PropertyType;
        }
    };
}

export interface ApiResponse {
    data: Property[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
