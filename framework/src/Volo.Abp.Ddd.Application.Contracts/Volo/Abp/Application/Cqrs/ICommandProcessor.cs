using System.Threading.Tasks;

namespace Volo.Abp.Application.Cqrs
{
    public interface ICommandProcessor
    {
        Task Process(ICommand command);

        Task<TResult> Process<TResult>(ICommand<TResult> command);
    }
}
