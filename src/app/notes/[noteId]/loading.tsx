import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="container mx-auto py-4">
      <Card className="max-w-screen-sm mx-auto">
        <CardHeader>
          <div className="space-y-2">
            <Skeleton className="h-7 w-3/4" />
            <Skeleton className="h-4 w-20" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Loading;
