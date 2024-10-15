import { notFound } from "next/navigation";

export default function ReviewDetail({
    params,
}: {
    params: { reviewId: string,
        productId: string,
     };
}) {
    if(parseInt(params.reviewId)) {
        notFound();
    }
    return (
        <>
            <h1>Review {params.reviewId} for product {params.productId}</h1>
        </>
        )
}