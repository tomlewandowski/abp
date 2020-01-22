using System.Threading.Tasks;

namespace Volo.Abp.Application.Cqrs
{
    public interface IQueryProcessor
    {
        Task<TResult> Process<TResult>(IQuery<TResult> query);
    }
}
