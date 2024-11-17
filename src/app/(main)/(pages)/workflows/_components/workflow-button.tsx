"use client";
import WorkflowForm from "@/components/forms/workflow-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";

type Props = {};

export default function WorkflowButton(props: Props) {
  const { setOpen } = useModal();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerful tool that help you automate tasks."
      >
        <WorkflowForm />
      </CustomModal>
    );
  };

  return (
    <Button onClick={handleClick} size={"icon"}>
      <Plus />
    </Button>
  );
}
