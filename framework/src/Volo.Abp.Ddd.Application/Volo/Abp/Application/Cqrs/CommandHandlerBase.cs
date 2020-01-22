using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace Volo.Abp.Application.Cqrs
{
    public abstract class CommandHandlerBase<TCommand> : ApplicationService, ICommandHandler<TCommand>
        where TCommand : ICommand
    {
        public abstract Task Handle(TCommand command);
    }
}
