using System.Threading.Tasks;

namespace Volo.Abp.Application.Cqrs
{
    public interface ICommandHandler<in TCommand, TResult>
        where TCommand : ICommand<TResult>
    {
        Task<TResult> HandleAsync(TCommand command);
    }

    public interface ICommandHandler<in TCommand> 
        where TCommand : ICommand
    {
        Task Handle(TCommand command);
    }
}
