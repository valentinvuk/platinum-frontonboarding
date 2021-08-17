export const isTtlValid: ({ expiry }: { expiry: number }) => boolean = ({
    expiry,
}) => {
    const now = new Date();
    return now.getTime() + 300000 > +expiry;
};
