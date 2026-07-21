"use client";
import { OrderItem } from "../../../../types/order";

interface OrderTrackingTimelineProps {
  order?: OrderItem;
}

export default function OrderTrackingTimeline({
  order,
}: OrderTrackingTimelineProps) {
  // Define timeline steps based on order status
  const getTimelineSteps = (status?: string) => {
    const steps = [
      {
        id: "placed",
        label: "Order Placed",
        description: "Your order has been confirmed",
        date: order?.createdAt,
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        ),
      },
      {
        id: "processing",
        label: "Processing",
        description: "Your order is being prepared",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        id: "shipped",
        label: "Shipped",
        description: "Your order is on the way",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        ),
      },
      {
        id: "delivered",
        label: "Delivered",
        description: "Your order has been delivered",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
    ];

    // Determine which steps are completed based on order status
    const statusMap: Record<string, number> = {
      paid: 1,
      processing: 2,
      shipped: 3,
      delivered: 4,
      cancelled: 0,
    };

    const completedSteps = statusMap[status?.toLowerCase() || ""] || 0;

    return steps.map((step, index) => ({
      ...step,
      isCompleted: index < completedSteps,
      isActive: index === completedSteps - 1,
      isUpcoming: index >= completedSteps,
    }));
  };

  const steps = getTimelineSteps(order?.status);

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="w-full py-4">
      {/* Desktop Timeline */}
      <div className="hidden sm:block">
        <div className="relative">
          {/* Progress Bar Background */}
          <div className="absolute left-0 right-0 top-5 h-0.5 bg-gray-200" />

          {/* Progress Bar Fill */}
          <div
            className="absolute left-0 top-5 h-0.5 bg-honey transition-all duration-500"
            style={{
              width: `${Math.max(0, ((steps.filter((s) => s.isCompleted).length - 1) / (steps.length - 1)) * 100)}%`,
            }}
          />

          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center flex-1">
                {/* Step Circle */}
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className={`
                      flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                      ${
                        step.isCompleted
                          ? "bg-honey border-honey text-white shadow-lg shadow-honey/30"
                          : step.isActive
                            ? "bg-honey border-honey text-white shadow-lg shadow-honey/30 ring-4 ring-honey/20"
                            : "bg-white border-gray-300 text-gray-400"
                      }
                    `}
                  >
                    {step.isCompleted || step.isActive ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="9" strokeWidth="2" />
                      </svg>
                    )}
                  </div>

                  {/* Label */}
                  <div className="mt-3 text-center">
                    <p
                      className={`
                        text-sm font-semibold
                        ${step.isCompleted || step.isActive ? "text-slate-900" : "text-gray-400"}
                      `}
                    >
                      {step.label}
                    </p>
                    <p
                      className={`
                        text-xs mt-0.5
                        ${step.isCompleted || step.isActive ? "text-slate-500" : "text-gray-300"}
                      `}
                    >
                      {step.isCompleted && step.date
                        ? formatDate(step.date)
                        : step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="sm:hidden">
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start gap-4 relative">
              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <div
                  className={`
                    absolute left-5 top-10 w-0.5 h-12
                    ${step.isCompleted ? "bg-honey" : "bg-gray-200"}
                  `}
                />
              )}

              {/* Step Circle */}
              <div
                className={`
                  flex items-center justify-center w-10 h-10 rounded-full border-2 shrink-0 transition-all duration-300 z-10
                  ${
                    step.isCompleted
                      ? "bg-honey border-honey text-white shadow-lg shadow-honey/30"
                      : step.isActive
                        ? "bg-honey border-honey text-white shadow-lg shadow-honey/30 ring-4 ring-honey/20"
                        : "bg-white border-gray-300 text-gray-400"
                  }
                `}
              >
                {step.isCompleted || step.isActive ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                  </svg>
                )}
              </div>

              {/* Step Details */}
              <div className="flex-1 pt-0.5">
                <p
                  className={`
                    text-sm font-semibold
                    ${step.isCompleted || step.isActive ? "text-slate-900" : "text-gray-400"}
                  `}
                >
                  {step.label}
                </p>
                <p
                  className={`
                    text-xs mt-0.5
                    ${step.isCompleted || step.isActive ? "text-slate-500" : "text-gray-300"}
                  `}
                >
                  {step.isCompleted && step.date
                    ? formatDate(step.date)
                    : step.description}
                </p>
                {step.isActive && (
                  <span className="inline-block mt-1.5 px-2 py-0.5 bg-honey/10 text-honey text-xs font-medium rounded-full">
                    Current
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
