import { Textarea } from "../ui/textarea";

interface ChatInputsProps {
  isDisabled?: boolean;
}

const ChatInput = ({ isDisabled }: ChatInputsProps) => {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      <form
        action=""
        className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"
      >
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="relative flex flex-col w-full flex-grow p-4">
            <div className="relative">
              <Textarea
                rows={1}
                maxRows={4}
                autoFocus
                className="resize-none pr-12 text-base py-3 scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                placeholder="Enter your question..."
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ChatInput;
